/**
* Code used in Samples and Demo Pages
*/


// Public Variable with some sample data
var demoTasks = [];
demoTasks.push({task:'063001', error: true, desc: 'Special fields test - New item has been created.'});
demoTasks.push({task:'063002', desc: 'Part #4212132 has low inventory level'});
demoTasks.push({task:'063003', desc: 'Check #112412 parts ordering.'});
demoTasks.push({task:'063004', desc: 'Special fields test - New item has been created.'});
demoTasks.push({task:'063005', desc: 'Call XYZ Inc at 5 PM'});
demoTasks.push({task:'063006', error: true, desc: 'Part #4212132 has low inventory level'});
demoTasks.push({task:'063007', desc: 'Special fields test - New item has been created.'});
demoTasks.push({task:'063008', desc: 'Part #5212132 has low inventory level'});
demoTasks.push({task:'063009', desc: 'Check #212412 parts ordering.'});
demoTasks.push({task:'063010', desc: 'Special fields test - New item has been created.'});
demoTasks.push({task:'063011', desc: 'Call TMZ Inc at 5 PM'});
demoTasks.push({task:'063012', desc: 'Part #6212132 has low inventory level'});

// Execute Page Code for Demo Page
$(function($) {

  var theme = $('#theme').val();

  //Change Theme when we select in the Drop Down
  $('#theme').on('change', function() {
    theme = $(this).val();
    //swap style sheets..
    $('body').fadeOut('fast', function() {
      $('#stylesheet').attr('href', '/stylesheets/'+ theme +'.css');
      $(this).fadeIn('fast');
    });
  });

  // Set Initial Theme
  if (theme !==undefined && theme !== 'grey-theme') {
    $('#stylesheet').attr('href', '/stylesheets/'+ theme +'.css');
  }

  // New, Theme, Personalization, Language Changer. TODO: Should this be a plugin?
  $('#page-changer').on('selected', function (e, link) {
    var href = link.attr('href').substr(1);

    link.parent().parent().find('.checkmark').removeClass('checkmark');
    link.parent().addClass('checkmark');

    // Change Theme
    if (href.indexOf('-theme') > 1) {
      $('body').fadeOut('fast', function() {
        $('#stylesheet').attr('href', '/stylesheets/'+ href +'.css');
        $(this).fadeIn('fast');
      });

      return;
    }

    // TODO: Change Lang
    if (href.indexOf('lang-') === 0) {
      Locale.set(href.substr(5));
      return;
    }

    // Change Color
    var color = link.attr('data-rgbcolor');
    $('.is-personalizable').css('background-color', color);


  });

  // Message.html View Specifics
  $('#show-application-error').on('click', function() {
      $('body').message({
          title: 'Application Error',
          isError: true,
          message: 'This application has experienced a system error due to the lack of internet access. Please restart the application in order to proceed.',
          buttons: [{
              text: 'Restart Now',
              click: function() {
                  $(this).modal('close');
              },
              isDefault: true
          }]
      });
  });

  $('#show-fileupload-confirmation').on('click', function() {
      $('body').message({
          title: 'File Upload Complete',
          message: 'Your file "<b>photo.png</b>" was sucessfully uploaded to your personal folder and is now public for viewing.',
          buttons: [{
              text: 'Done',
              click: function() {
                  $(this).modal('close');
              },
              isDefault: true
          }]
      });
  });

  $('#show-delete-confirmation').on('click', function() {

    $('body').message({
      title: 'Delete this Application?',
      message: 'You are about to delete this application permanently. Would you like to proceed?',
      buttons: [{
        text: 'No',
        click: function(e, modal) {
          modal.close();
        }
      }, {
        text: 'Yes',
        click: function(e, modal) {
          modal.close();
        },
        isDefault: true
      }]
    });

  });

  // Modal.html View Specifics
  $('#btn-add-comment').on('click', function() {

    $('body').modal({
      title: 'Add a Comment',
      content: '<small class="alert-text">Escalated (2X)</small><br><h3 style="padding: 0px 15px; margin-top: 8px;">Follow up action with HMM Global </h3><p style="padding: 0px 15px">Contact sales representative with the updated purchase <br> '+
          'order before submission.</p><br><label for="dialog-comment" class="audible">Comment</label><textarea name="dialog-comment" id="dialog-comment"></textarea>',
      buttons: [{
        text: 'Cancel',
        click: function(e, modal) {
          modal.close();
        }
      }, {
        text: 'Submit',
        click: function(e, modal) {
          modal.close();
        },
        isDefault: true
      }]
    });

  });

  // Toast.html View Specifics
  var cnt = 0;
  $('#show-toast-message').on('click', function() {

    cnt ++;
    $('body').toast({title: 'Application Offline' + cnt, message: 'This is a Toast message'});

  });

});
