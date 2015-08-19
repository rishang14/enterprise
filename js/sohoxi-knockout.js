// SoHo XI Knockout Binding Handlers

$(function () {

  ko.bindingHandlers.dropdown = {
    init: function(element, valueAccessor) {
      var opts = ko.utils.unwrapObservable(valueAccessor()),
        elem = $(element);

      //set the data
      ko.bindingHandlers.dropdown.setData(elem, opts);

      //init the control
      if (!elem.data('dropdown')) {
        elem.dropdown();
      }

      //set the value
      if (opts.value) {
        $(element).val(valueAccessor().value()).trigger('updated');
      }

      //Setup events
      ko.utils.registerEventHandler(element, 'change', function() {
        var value = valueAccessor().value;
        value($(this).val());
      });
    },

    update: function(element, valueAccessor) {
      var opts = ko.utils.unwrapObservable(valueAccessor()),
        elem = $(element);

      if (opts.data) {
        ko.bindingHandlers.dropdown.setData(elem, opts);
      }

      if (opts.visible && !opts.visible()) {
        $(element).parent().find('.dropdown-wrapper').hide();
      }

      if (opts.visible && opts.visible()) {
        $(element).parent().find('.dropdown-wrapper').show();
      }

      $(element).enable();

      if (opts.readonly && opts.readonly()) {
        $(element).readonly();
      }

      if (opts.enable && !opts.enable()) {
        $(element).disable();
      }

      $(element).val(ko.utils.unwrapObservable(opts.value)).trigger('updated');
    },

    setData: function(elem, opts) {
      if (opts.data) {
        var data = ko.utils.unwrapObservable(opts.data);

        if (data.length === elem[0].options.length && elem[0].options[0].id === data[0].id) {
          return;
        }

        elem.empty();
        for (var i=0; i < data.length; i++) {
          var opt = $('<option></option').attr('value', (opts.optionsValue ? data[i][opts.optionsValue] : data[i].key)).html((opts.optionsText ? data[i][opts.optionsText] : data[i].name));
          elem.append(opt);
        }
        elem.trigger('updated');
      }
    }
  };

  ko.bindingHandlers.fileupload = {
    init: function(element, valueAccessor) {
      var opts = ko.utils.unwrapObservable(valueAccessor()),
        elem = $(element);

      //Setup events
      ko.utils.registerEventHandler(element, 'change', function() {
        var value = valueAccessor().value;
        value($(this).val());
      });

      //init the control
      if (!elem.data('fileupload')) {
        elem.fileupload();
      }

      //set the value
      if (opts.value) {
        elem.parent().find('input[type="text"]').val(ko.utils.unwrapObservable(opts.value));
      }
    },
    update: function(element, valueAccessor) {
      var opts = ko.utils.unwrapObservable(valueAccessor()),
        elem = $(element);

      elem.parent().find('input[type="text"]').val(ko.utils.unwrapObservable(opts.value));

      if (opts.visible && !opts.visible()) {
        $(element).closest('.field').hide();
      }

      if (opts.visible && opts.visible()) {
        $(element).closest('.field').show();
      }

      $(element).enable();

      if (opts.readonly && opts.readonly()) {
        $(element).readonly();
      }

      if (opts.enable && !opts.enable()) {
        $(element).disable();
      }
    }
  };

});
