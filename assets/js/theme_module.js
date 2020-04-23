$(".owl-carousel").owlCarousel({
  loop: true,
  items: 1,
  autoplay: true,
  navSpeed: 1000,
});

$("#cart").on("click", function () {
  $(".cart-container").toggleClass("show-cart");
});

$("#float-cart-btn").on("click", function () {
  $(".cart-container").toggleClass("show-cart");
});
