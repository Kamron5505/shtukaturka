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

AOS.init({
  duration: 1000, // Длительность анимации в мс
  once: true, // Анимация срабатывает один раз
});
