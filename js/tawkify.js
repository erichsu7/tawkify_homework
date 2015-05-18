(function () {
  if (typeof window.Tawkify === "undefined") {
    window.Tawkify = {};
  }

  var genderSpinner = Tawkify.genderSpinner = function () {
    $(".input-gender .spinner-up").on("click", function (event) {
      var $input = $(".input-gender > input");
      if ($input.val() === "") {
        $input.val("Female");
      } else if ($input.val() === "Female") {
        $input.val("Male");
      } else {
        $input.val("Female");
      }
    })

    $(".input-gender .spinner-down").on("click", function (event) {
      var $input = $(".input-gender > input");
      if ($input.val() === "") {
        $input.val("Male");
      } else if ($input.val() === "Female") {
        $input.val("Male");
      } else {
        $input.val("Female");
      }
    })
  }

})();
