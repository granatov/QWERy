$(function () {
  $(".menu_brg").click(function (event) {
    $(".menu_brg,.menu_list,.header_social").toggleClass("active");
  });

  $(".photo_slider_items").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 880,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  });
});
