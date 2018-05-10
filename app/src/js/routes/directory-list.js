// Directory List Route
// =============================================

const fs = require('fs');
const path = require('path');
const logger = require('../../../../scripts/logger');
const utils = require('../utils');

// Format filenames
function formatPath(filename) {
  return filename.replace(/-/g, ' ').replace(/\.html/, '').toLowerCase();
}

// Returns a directory listing as page content with working links
module.exports = function directoryList(directory, viewsRoot, req, res, next) {
  fs.readdir(directory, (err, paths) => {
    if (err) {
      logger('error', `Directory Listing Error: ${err}`);
      res.opts.error = err;
      res.status(500).render('error', res.opts);
      return;
    }

    const realPaths = [];

    // Strip out paths that aren't going to ever work
    paths.forEach((val) => {
      const excludes = [
        /_layout\.html/,
        /layout.html/,
        /listing\.html/,
        /\.DS_Store/
      ];
      let match = false;

      excludes.forEach((exclude) => {
        if (val.match(exclude)) {
          match = true;
        }
      });

      if (match) {
        return;
      }

      realPaths.push(val);
    });

    // Map with links, add to
    function pathMapper(link) {
      let href = path.join('/', directory.replace(viewsRoot, ''), link);
      let icon;
      let type = 'file';

      if (utils.isType('directory', `${directory}${link}`)) {
        icon = '#icon-folder';
        type = 'folder';
        href += '/list';
      } else {
        icon = '#icon-document';
      }

      if (link.indexOf('example-') === 0) {
        type = 'example';
      } else if (link.indexOf('test-') === 0) {
        type = 'test';
      }

      return {
        icon,
        href: href.replace(/\\/g, '/'),
        text: formatPath(link),
        type
      };
    }

    const relativeDir = directory.replace(viewsRoot, '');

    if (utils.canChangeLayout(req, res)) {
      res.opts.layout = `${path.join(viewsRoot, '/layout.html')}`;
      req.app.set('layout', res.opts.layout);
    }

    res.opts.title = `Directory list: ${relativeDir}`;
    res.opts.directory = `${relativeDir}`;
    res.opts.paths = realPaths.map(pathMapper);

    res.render(path.join(viewsRoot, 'listing.html'), res.opts);
    next();
  });
};
