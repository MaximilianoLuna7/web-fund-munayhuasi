window.addEventListener("load", function () {
  new Glider(document.querySelector(".carrusel__lista"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: ".carrusel__indicadores",
    arrows: {
      prev: ".carrusel__anterior",
      next: ".carrusel__siguiente",
    },
    responsive: [
      {
        // screens greater than >= 580px
        breakpoint: 580,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        // screens greater than >= 991px
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ]
  });
});
