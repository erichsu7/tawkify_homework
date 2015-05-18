(function () {
  if (typeof window.Tawkify === "undefined") {
    window.Tawkify = {};
  }

  var initializeDragAndDrop = Tawkify.initializeDragAndDrop = function () {

    filepicker.makeDropPane($('.drag-and-drop-container')[0], {
    multiple: true,
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

})();
