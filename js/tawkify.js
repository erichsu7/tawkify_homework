(function () {
  if (typeof window.Tawkify === "undefined") {
    window.Tawkify = {};
  }

  var initializeDragAndDrop = Tawkify.initializeDragAndDrop = function () {

    filepicker.makeDropPane($('.drag-and-drop-container')[0], {
    multiple: true,
    mimetype: "image/*",
    maxSize: 4*1024*1024,
    dragEnter: function() {
      $(".drag-and-drop-instructions").html("Drop to upload");
    },
    dragLeave: function() {
      $(".drag-and-drop-instructions").html("Drag and drop a photo");
    },
    onSuccess: function(Blobs) {
      $(".drag-and-drop-instructions").text("Successfully uploaded photo! Drop another to upload.");
    },
    onError: function(type, message) {
      $(".drag-and-drop-instructions").text('('+type+') '+ message);
    },
    onProgress: function(percentage) {
      $(".drag-and-drop-instructions").text("Uploading ("+percentage+"%)");
    }
    });
  };

  var addValidators = Tawkify.addValidators = function () {
    zipcodeValidator();
    dayValidator();
    monthValidator();
    yearValidator();
  }

  var zipcodeValidator = function () {
    $.formUtils.addValidator({
    name : 'zipcode',
    validatorFunction : function(value, $el, config, language, $form) {
      return value.length === 5 && parseInt(value) < 100000 && parseInt(value) >= 0;
    },
    errorMessage : 'You must enter a valid zipcode',
    errorMessageKey: 'badZipcode'
    });
  };

  var dayValidator = function () {
    $.formUtils.addValidator({
    name : 'day',
    validatorFunction : function(value, $el, config, language, $form) {
      return parseInt(value) > 0 && parseInt(value) < 32;
    },
    errorMessage : 'You must enter a valid birthday',
    errorMessageKey: 'badBirthday'
    });
  };

  var monthValidator = function () {
    $.formUtils.addValidator({
    name : 'month',
    validatorFunction : function(value, $el, config, language, $form) {
      return parseInt(value) > 0 && parseInt(value) < 13;
    },
    errorMessage : 'You must enter a valid birthday',
    errorMessageKey: 'badBirthday'
    });
  }

  var yearValidator = function () {
    $.formUtils.addValidator({
    name : 'year',
    validatorFunction : function(value, $el, config, language, $form) {
      return parseInt(value) > 1900 && parseInt(value) < 1998;
    },
    errorMessage : 'You must enter a valid birthday',
    errorMessageKey: 'badBirthday'
    });
  }

})();
