(function () {
  if (typeof window.Tawkify === "undefined") {
    window.Tawkify = {};
  }

  var initializeSpinners = Tawkify.initializeSpinners = function () {
    genderSpinner();
    orientationSpinner();
  }

  var genderSpinner = Tawkify.genderSpinner = function () {
    var genders = ["Male", "Female"];
    var genderIdx;

    $(".input-gender .spinner-up").on("click", function (event) {
      var $input = $(".input-gender > input");
      if ($input.val() === "") {
        genderIdx = 1;
      } else {
        genderIdx = (genderIdx + 1) % 2;
      }

      $input.val(genders[genderIdx]);
    })

    $(".input-gender .spinner-down").on("click", function (event) {
      var $input = $(".input-gender > input");
      if ($input.val() === "") {
        genderIdx = 0;
      } else {
        genderIdx = (genderIdx + 1) % 2;
      }

      $input.val(genders[genderIdx]);
    })
  }

  var orientationSpinner = Tawkify.orientationSpinner = function () {
    var orientations = ["Men", "Women", "Both"];
    var orIdx;
    $(".input-orientation .spinner-up").on("click", function (event) {
      var $input = $(".input-orientation > input");
      if ($input.val() === "") {
        orIdx = orientations.length - 1;
      } else {
        orIdx = orIdx === 0 ? orientations.length - 1 : orIdx - 1;
      }

      $input.val(orientations[orIdx]);

    })

    $(".input-orientation .spinner-down").on("click", function (event) {
      var $input = $(".input-orientation > input");
      if ($input.val() === "") {
        orIdx = 0;
      } else {
        orIdx = (orIdx + 1) % orientations.length;
      }

      $input.val(orientations[orIdx]);
    })
  }

})();
