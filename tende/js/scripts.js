//  Preloader
jQuery(window).on("load", function () {
  $("#preloader").fadeOut(500);
  $("#main-wrapper").addClass("show");
});

(function ($) {
  "use strict";

  //to keep the current page active
  //to keep the current page active
  // Setting active
  $(function () {
    const settings = window.location.pathname.includes("settings");
    if (settings) {
      $(".setting_").addClass("active");
    }
  });
  // active sidebar
  $(function () {
    for (
      var nk = window.location,
        o = $(".menu a")
          .filter(function () {
            return nk.href.includes(this.href);
          })
          .addClass("active")
          .parent()
          .addClass("active");
      ;

    ) {
      // console.log(o)
      if (!o.is("li")) break;
      o = o.parent().addClass("show").parent().addClass("active");
    }
  });
  // Setting sidebar
  $(function () {
    for (
      var nk = window.location,
        o = $(".settings-menu a")
          .filter(function () {
            return nk.href.includes(this.href);
          })
          .addClass("active")
          .parent()
          .addClass("active");
      ;

    ) {
      // console.log(o)
      if (!o.is("li")) break;
      o = o.parent().addClass("show").parent().addClass("active");
    }
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
  let year = document.querySelector("#year");
  if (year) {
    year.innerHTML = new Date().getFullYear();
  }
  const value = "https://www.Tende.io/join/12345";
  const copy = document.querySelectorAll(".copy");
  copy.forEach((c) => {
    c.addEventListener("click", () => {
      navigator.clipboard.writeText(value);
      alert("Copied the text: " + value);
    });
  });
})(jQuery);
