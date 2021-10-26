$(document).ready(function () {
  let fetch = setInterval(() => {
    if (document.readyState == "complete") {
      clearInterval(fetch);
      console.log("Ready");
      $(".atf").addClass("init");
    }
  }, 300);
  $(window).scroll(function (e) {
    $.each($(".yz-animate"), function (e) {
      let ww = $(window).innerWidth();
      if (
        $(window).scrollTop() + $(window).innerHeight() * 0.6 >
        $(this).offset().top
      ) {
        $(this).addClass("init");
      }
    });

    $.each($(".parallax"), function (e) {
      let ww = $(window).innerWidth();
      if (
        $(window).scrollTop() + $(window).innerHeight() * 0.6 >
        $(this).offset().top
      ) {
        setTimeout(() => {
          if (ww > 960) {
            $(this).css({
              transform:
                "translate(0px," +
                parseFloat(
                  ($(window).scrollTop() +
                    $(window).innerHeight() * 0.7 -
                    $(this).offset().top) *
                    0.04
                ).toFixed(2) +
                "px)",
            });
          }
          // if (ww < 961 && ww > 767) {
          //     direction = $(this).hasClass("tab-col-1") ? -1 : 1;
          //     $(this)
          //         .find(".img-wrapper")
          //         .css({
          //             transform: "translate(0px," + parseFloat(($(window).scrollTop() + $(window).innerHeight() * 0.7 - $(this).offset().top) * 0.02 * direction).toFixed(2) + "px)"
          //         });
          // }
        }, 30);
      }
    });
  });
});
