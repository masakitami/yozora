/* --------- 　ここから編集禁止  ------------- */
console.info("\n %c Orelop Static - https://github.com/hilosiva/orelop-static \n", "color: #66ffa5; background: #001010; padding:8px 0;");
import.meta.glob(["../img/**"]);
/* --------- 　ここまで編集禁止  ------------- */
!(function () {
  const viewport = document.querySelector('meta[name="viewport"]');
  function switchViewport() {
    const value = window.outerWidth > 400 ? "width=device-width,initial-scale=1" : "width=400";
    if (viewport.getAttribute("content") !== value) {
      viewport.setAttribute("content", value);
    }
  }
  addEventListener("resize", switchViewport, false);
  switchViewport();
})();

import "@splidejs/splide/css/core";
import Splide from "@splidejs/splide";

new Splide(".js-powerpoint", {
  perPage: 1,
  perMove: 1,
  arrows: true,
  speed: 600,
  interval: 12000,
  arrows: true,
  pagination: false,
  pauseOnHover: false,
  easing: "ease-in-out",
}).mount();
