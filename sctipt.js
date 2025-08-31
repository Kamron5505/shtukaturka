const swiper = new Swiper(".portfolio__row", {
  slidesPerView: 3, // показывать по 3 картинки в ряд
  spaceBetween: 20, // расстояние между ними (можете менять)
  slidesPerGroup: 1, // листать по одной
  loop: true, // бесконечный цикл (если нужно)
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
