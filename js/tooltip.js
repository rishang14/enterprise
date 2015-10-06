/**
* Tooltip and Popover Control
*/

/* start-amd-strip-block */
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function($) {
/* end-amd-strip-block */

  $.fn.tooltip = function(options, args) {
    'use strict';

    // Settings and Options
    var pluginName = 'tooltip',
      defaults = {
        content: null, //Takes title attribute or feed content. Can be a function or jQuery markup
        offset: {top: 15, left: 0}, //how much room to leave
        placement: 'top',  //can be top/left/bottom/right/offset
        trigger: 'hover', //supports click and manual and hover (future focus)
        title: null, //Title for Infor Tips
        beforeShow: null, //Call back for ajax tooltip
        popover: null , //force it to be a popover (no content)
        isError: false, //Add error classes
        tooltipElement: null, // ID selector for an alternate element to use to contain the tooltip classes
        keepOpen: false // Forces the tooltip to stay open in situations where it would normally close.
      },
      settings = $.extend({}, defaults, options);

    // Plugin Constructor
    function Tooltip(element) {
      this.element = $(element);
      this.init();
    }

    // Plugin Object
    Tooltip.prototype = {
      init: function() {
        this.setup();
        this.appendTooltip();
        this.handleEvents();
        this.addAria();
        this.isPopover = (settings.content !== null && typeof settings.content === 'object') || settings.popover;
      },

      setup: function() {
        // this.activeElement is the element that the tooltip displays and positions against
        this.activeElement = this.element;

        this.descriptionId = $('.tooltip-description').length + 1;
        this.description = this.element.next('.tooltip-description');
        if (!this.description.length && settings.isError) {
          this.description = $('<span id="tooltip-description-'+ this.descriptionId +'" class="tooltip-description audible"></span>').insertAfter(this.element);
        }

        if (this.element.is('.dropdown, .multiselect')) {
          this.activeElement = $('#' + this.element.attr('id') + '-shdo');
        }
      },

      addAria: function() {
        this.content = this.element.attr('title') || settings.content;
        this.description.text(this.content);
        this.content = this.addClassToLinks(this.content, 'links-clickable');

        if (!this.isPopover) {
          this.element.removeAttr('title').attr('aria-describedby', this.description.attr('id'));
        }

        if (this.isPopover && settings.trigger === 'click') {
          this.element.attr('aria-haspopup', true);
        }
      },

      addClassToLinks: function(content, thisClass) {
        var d = $('<div/>').html(content);
        $('a', d).addClass(thisClass);
        return d.html();
      },

      appendTooltip: function() {
        this.tooltip = settings.tooltipElement ? $(settings.tooltipElement) : $('#tooltip');
        if (!this.tooltip.length) {
          var name = (settings.tooltipElement ? settings.tooltipElement.substring(1, settings.tooltipElement.length) : 'tooltip');
          this.tooltip = $('<div class="' + (this.isPopover ? 'popover' : 'tooltip') + ' bottom is-hidden" role="tooltip" id="' + name + '"><div class="arrow"></div><div class="tooltip-content"><p>(Content)</p></div></div>');
        }
        this.place();
      },

      handleEvents: function() {
        var self = this, timer, delay = 400;

        if (settings.trigger === 'hover' && !settings.isError) {
          this.element
            .on('mouseenter.tooltip', function() {
              timer = setTimeout(function() {
                self.show();
              }, delay);
            })
            .on('mouseleave.tooltip mousedown.tooltip click.tooltip mouseup.tooltip', function() {
                clearTimeout(timer);
                setTimeout(function() {
                  self.hide();
                }, delay);
            });
        }

        if (settings.trigger === 'click') {
          this.element.on('click.tooltip', function() {
            if (self.tooltip.hasClass('is-hidden')) {
              self.show();
            } else {
              self.hide();
            }
          });
        }

        if (settings.trigger === 'immediate') {
          timer = setTimeout(function() {
            if (self.tooltip.hasClass('is-hidden')) {
              self.show();
            } else {
              self.hide();
            }
          }, 1);
        }

        if (settings.trigger === 'focus') {
          this.element.on('focus.tooltip', function() {
            self.show();
          })
          .on('blur.tooltip', function() {
            self.hide();
          });
        }

        this.element.filter('button, a').on('focus.tooltip', function() {
          self.setContent(self.content);
        });

      },

      setContent: function(content) {
        var contentArea;

        content = Locale.translate(content) || content;

        if (this.isPopover) {
          contentArea = this.tooltip.find('.tooltip-content').html(settings.content).removeClass('hidden');
          settings.content.removeClass('hidden');
          this.tooltip.removeClass('tooltip').addClass('popover');

          if (settings.title !== null) {
            var title = this.tooltip.find('.tooltip-title');
            if (title.length === 0) {
              title = $('<div class="tooltip-title"></div>').prependTo(this.tooltip);
            }
            title.html(settings.title).show();
          } else {
            this.tooltip.find('.tooltip-title').hide();
          }

          contentArea.initialize();
          return;
        } else {
          this.tooltip.find('.tooltip-title').hide();
        }

        this.tooltip.removeClass('popover').addClass('tooltip');
        if (typeof settings.content === 'function') {
          content = this.content = settings.content.call(this.element);
        }

        contentArea = this.tooltip.find('.tooltip-content');

        if (contentArea.prev('.arrow').length === 0) {
          contentArea.before('<div class="arrow"></div>');
        }
        contentArea.html('<p>' + (content === undefined ? '(Content)' : content) + '</p>');

      },

      show: function(newSettings, ajaxReturn) {
        var self = this;
        this.isInPopup = false;

        if (newSettings) {
          settings = newSettings;
        }

        if (settings.beforeShow && !ajaxReturn) {
          var response = function (content) {
            self.content = content;
            self.show(settings, true);
          };

          if (typeof settings.beforeShow === 'string') {
            window[settings.beforeShow](response);
            return;
          }

          settings.beforeShow(response);
          return;
        }

        this.setContent(this.content);
        this.element.trigger('beforeshow', [this.tooltip]);

        this.tooltip.removeAttr('style');
        this.tooltip.removeClass('bottom right left top offset is-error').addClass(settings.placement);

        if (settings.isError) {
          this.tooltip.addClass('is-error');
        }

        this.place();
        this.tooltip.removeClass('is-hidden');
        this.position();
        this.element.trigger('show', [this.tooltip]);

        setTimeout(function () {
          $(document).on('mouseup.tooltip', function (e) {

            if (settings.isError || settings.trigger === 'focus') {
             return;
            }

            if ($(e.target).is(self.element) && $(e.target).is('svg.icon')) {
              return;
            }

            if ($(e.target).closest('.popover').length === 0 &&
                $(e.target).closest('.dropdown-list').length === 0) {
              self.hide(e);
            }
          })
          .on('keydown.tooltip', function (e) {
            if (e.which === 27 || settings.isError) {
              self.hide();
            }
          });

          $(window).on('resize.tooltip', function() {
            self.hide();
          });

          // Click to close
          if (settings.isError) {
            self.tooltip.on('click.tooltip', function () {
              self.hide();
            });
          }

          self.element.trigger('aftershow', [self.tooltip]);
        }, 400);

      },

      // Places the tooltip element itself in the correct DOM element.
      // If the current element is inside a scrollable container, the tooltip element goes as high as possible in the DOM structure.
      place: function() {
        var targetContainer = $('body');

        // adjust the tooltip if the element is being scrolled inside a scrollable DIV
        this.scrollparent = this.element.parents('.page-container[class*="scrollable"]').first();
        if (this.scrollparent.length) {
          targetContainer = this.scrollparent;
        }

        this.tooltip.detach().appendTo(targetContainer);
      },

      position: function () {
        var self = this,
          winH = window.innerHeight + $(document).scrollTop(),
          // subtract 2 from the window width to account for the tooltips
          // resizing themselves to fit within the CSS overflow boundary.
          winW = (window.innerWidth - 2) + $(document).scrollLeft(),
          scrollable = {
            deltaHeight: 0,
            deltaWidth: 0,
            offsetLeft: 0,
            offsetTop: 0
          };

        // Reset adjustments to panel and arrow
        this.tooltip.removeAttr('style');
        this.tooltip.find('.arrow').removeAttr('style');

        if (this.scrollparent.length) {
          scrollable.offsetTop = this.scrollparent.scrollTop();
          scrollable.offsetLeft = this.scrollparent.scrollLeft();
          scrollable.deltaHeight = this.scrollparent.offset().top;
          scrollable.deltaWidth = this.scrollparent.offset().left;
          winH = winH - (this.scrollparent.offset().top + scrollable.offsetTop);
          winW = winW - (this.scrollparent.offset().left + scrollable.offsetLeft);
        }

        switch(settings.placement) {
          case 'offset':
            // Used for error messages (validation)
            self.tooltip.addClass('bottom');
            self.placeBelowOffset(scrollable);
            break;
          case 'bottom':
            self.placeBelow(scrollable);
            var bottomOffset = self.tooltip.offset().top - scrollable.deltaHeight + self.tooltip.outerHeight();
            if (bottomOffset >= winH) {
              self.tooltip.removeClass('bottom').addClass('top');
              self.placeAbove(scrollable);
            }
            break;
          case 'top':
            self.placeAbove(scrollable);
            if (this.tooltip.offset().top - scrollable.deltaHeight <= 0) {
              self.tooltip.removeClass('top').addClass('bottom');
              self.placeBelow(scrollable);
            }
            break;
          case 'right':
            self.placeToRight(scrollable);
            var rightOffset = self.tooltip.offset().left - scrollable.deltaWidth + self.tooltip.outerWidth();
            if (rightOffset >= winW) {
              self.tooltip.removeClass('right').addClass('left');
              self.placeToLeft(scrollable);
            }
            break;
          default: //left
            self.placeToLeft(scrollable);
            if (this.tooltip.offset().left - scrollable.deltaWidth <= 0) {
              self.tooltip.removeClass('left').addClass('right');
              self.placeToRight(scrollable);
            }
            break;
        }

        // secondary check on bottom/top placements to see if the tooltip width is long enough
        // to bleed off the edge of the page.
        var o = self.tooltip.offset(),
          arrow = self.tooltip.find('.arrow'),
          arrowPosLeft = 0,
          delta = 0;

        function offLeftEdgeCondition() {
          return o.left - scrollable.deltaWidth <= 0;
        }

        function offRightEdgeCondition() {
          return o.left - scrollable.deltaWidth + self.tooltip.outerWidth() >= winW;
        }

        if (settings.placement === 'bottom' ||
            settings.placement === 'top' ) {

          // Check for bleeding off the left edge
          if (offLeftEdgeCondition()) {
            delta = (0 - (o.left - scrollable.deltaWidth) + 1) * -1;
            self.tooltip.css('left', o.left + delta);
            arrowPosLeft = parseInt(arrow.css('left'), 10);
            arrow.css('left', arrowPosLeft - delta);

            // Check again.  If it's still bleeding off the left edge, swap it to a right-placed Tooltip.
            if (offLeftEdgeCondition()) {
              self.tooltip.removeClass('top bottom').addClass('right');
              self.placeToRight(scrollable);
            }
          }

          // Check for bleeding off the right edge.
          if (offRightEdgeCondition()) {
            // need to explicitly set a width on the popover for this to work, otherwise popover contents will wrap
            // and cause it to grow wider:
            var tooltipWidth = self.tooltip.outerWidth();
            self.tooltip.css('width', tooltipWidth);

            delta = (winW - (o.left - scrollable.deltaWidth + tooltipWidth) - 1) * -1;
            self.tooltip.css('left', o.left - delta);
            arrowPosLeft = parseInt(arrow.css('left'), 10);
            arrow.css('left', arrowPosLeft + delta);

            // Check again.  If it's still bleeding off the edge, swap it to a left-placed Tooltip.
            o = self.tooltip.offset();
            if (offRightEdgeCondition()) {
              arrow.removeAttr('style');
              self.tooltip.removeClass('top bottom').addClass('left');
              self.placeToLeft(scrollable);
            }
          }

        }

      },

      placeBelowOffset: function(scrollable) {
       var o = this.activeElement.offset(),
          extraOffset = (this.element.parent().find('.icon').length > 1 ? -12 : 4),
          extraWidth = 10;

        if (this.activeElement.is('input.dropdown')) {
          extraWidth = -20;
          extraOffset = 16;
        }

        if (this.activeElement.is('.lookup')) {
          extraOffset = -17;
        }

        this.tooltip.find('.arrow').css('right', '');

        if (this.activeElement.is('.input-sm')) {
          extraWidth = -64;
          extraOffset = 164;
          this.tooltip.find('.arrow').css('right', '102px');
        }

         if (this.activeElement.is('.input-xs')) {
          extraWidth = -64;
          extraOffset = 240;
          this.tooltip.find('.arrow').css('right', '178px');
        }

        if (this.activeElement.is('.timepicker') || this.activeElement.is('.datepicker')) {
          extraOffset = -15;
        }

        this.tooltip.css({'width': this.tooltip.width() + extraWidth,
                          'top' : o.top + scrollable.offsetTop + this.activeElement.outerHeight() + settings.offset.top - scrollable.deltaHeight,
                          'left' : o.left + scrollable.offsetLeft + settings.offset.left + (this.activeElement.outerWidth() - this.tooltip.outerWidth()) + extraOffset - scrollable.deltaWidth });
      },
      placeBelow: function (scrollable) {
        var o = this.activeElement.offset();
        this.tooltip.css({'top': o.top + scrollable.offsetTop + this.activeElement.outerHeight() + settings.offset.top - scrollable.deltaHeight,
                          'left': o.left + scrollable.offsetLeft + settings.offset.left + (this.activeElement.outerWidth()/2) - (this.tooltip.outerWidth() / 2) - scrollable.deltaWidth});
      },
      placeAbove: function (scrollable) {
        var o = this.activeElement.offset();
        this.tooltip.css({'top': o.top + scrollable.offsetTop - settings.offset.top - this.tooltip.outerHeight() - scrollable.deltaHeight,
                          'left': o.left + scrollable.offsetLeft + settings.offset.left + (this.activeElement.outerWidth()/2) - (this.tooltip.outerWidth() / 2) - scrollable.deltaWidth});
      },
      placeToRight: function (scrollable) {
        var o = this.activeElement.offset();
        this.tooltip.removeAttr('style');
        this.tooltip.css({'top': o.top + scrollable.offsetTop - (this.tooltip.outerHeight() / 2) + (this.activeElement.outerHeight() / 2) - scrollable.deltaHeight,
                          'left': o.left + scrollable.offsetLeft + settings.offset.left + this.activeElement.outerWidth() + settings.offset.top - scrollable.deltaWidth});
      },
      placeToLeft: function (scrollable) {
        var o = this.activeElement.offset();
        this.tooltip.removeAttr('style');
        this.tooltip.css({'top': o.top + scrollable.offsetTop - (this.tooltip.outerHeight() / 2) + (this.activeElement.outerHeight() / 2) - scrollable.deltaHeight,
                          'left': o.left + scrollable.offsetLeft + settings.offset.left - (settings.offset.top + this.tooltip.outerWidth()) - scrollable.deltaWidth});
      },

      hide: function() {
        if (settings.keepOpen) {
          return;
        }

        if (this.isInPopup) {
          settings.content.addClass('hidden');
          return;
        }

        this.tooltip.addClass('is-hidden').css({'left': '', 'top': ''});
        this.tooltip.off('click.tooltip');

        if ($('.popover').not('.is-hidden').length === 0) {
          $(document).off('mouseup.tooltip keydown.tooltip');
          $(window).off('resize.tooltip');
        }

        this.element.trigger('hide', [this.tooltip]);
      },

      destroy: function() {
        this.description.remove();
        this.descriptionId = undefined;
        this.element.removeAttr('aria-describedby').removeAttr('aria-haspopup');
        if (!this.tooltip.hasClass('is-hidden')) {
          this.hide();
        }
        this.element.removeData(pluginName);
        this.element.off('mouseenter.tooltip mouseleave.tooltip mousedown.tooltip click.tooltip focus.tooltip blur.tooltip');
      }
    };

    // Initializing the Control Once or Call Methods.
    return this.each(function() {

      var instance = $.data(this, pluginName);

      //Allow one tooltip and one popover
      if (instance && (instance.settings.popover == null || instance.settings.popover !== settings.popover)) {
        if (typeof instance[options] === 'function') {
          instance[options](args);
        }

        instance.settings = $.extend(instance.settings, options);

        if (settings.trigger === 'immediate') {
         setTimeout(function() {
            instance.show(settings);
          }, 100);
        }
      } else {
        instance = $.data(this, pluginName, new Tooltip(this, settings));
        instance.settings = settings;
      }
    });
  };

  // Popover & Tooltip are the same control
  $.fn.popover = $.fn.tooltip;

/* start-amd-strip-block */
}));
/* end-amd-strip-block */
