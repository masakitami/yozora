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

// ローディング終了処理
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function loadedPage() {
  const loadingID = document.getElementById("js-loading");
  if (!loadingID) return;
  new Splide(".js-mainvisual", {
    autoplay: true, // 自動再生
    type: "fade", // フェード
    rewind: true, // スライダーの終わりまで行ったら先頭に巻き戻す
    pauseOnHover: false, // カーソルが乗ってもスクロールを停止させない
    pauseOnFocus: false, // 矢印をクリックしてもスクロールを停止させない
    interval: 5000, // 自動再生の間隔
    speed: 2000, // スライダーの移動時間
    arrows: false,
  }).mount();
  await sleep(500); // CSSのtransition時間に合わせる
  loadingID.classList.add("js-loaded");
  await sleep(500); // CSSのtransition時間に合わせる
  const drawer = document.getElementById("js-drawer");
  if (drawer) drawer.classList.add("js-display-block");
  await sleep(500); // CSSのtransition時間に合わせる
  backfaceFixed(false);
  await sleep(500); // CSSのtransition時間に合わせる
  loadingID.classList.add("js-display-none");
}
// 初回訪問時だけローディング
if (!sessionStorage.getItem("visited")) {
  sessionStorage.setItem("visited", "first");

  backfaceFixed(true); // 背景固定開始

  window.addEventListener("load", function () {
    setTimeout(loadedPage, 1000); // ローディングアニメーション後に解除
  });
  setTimeout(loadedPage, 5000); // 念のための保険
} else {
  // 2回目以降は即非表示にしてから処
  const loadingID = document.getElementById("js-loading");
  if (loadingID) {
    loadingID.style.display = "none"; // または loadingID.style.display = "none";
  }
  loadedPage();
}

// window.addEventListener("orientationchange", () => {
//   // スマホかどうかを判定（例: 幅が768px未満ならスマホとみなす）
//   if (window.matchMedia("(max-width: 768px)").matches) {
//     const contents = document.getElementById("js-contents");
//     if (!contents) return;

//     if (window.matchMedia("(orientation: landscape)").matches) {
//       // 横向き
//       contents.style.width = "100%";
//       console.log("スマホで横向きになりました");
//     } else {
//       // 縦向き
//       contents.style.width = "400px";
//       console.log("スマホで縦向きに戻りました");
//     }
//   }
// });

// ハンバーガーメニュー
const hamburgerButton = document.querySelector("#js-buttonHamburger");

hamburgerButton.addEventListener("click", (e) => {
  console.log("押した");
  const isExpanded = e.currentTarget.getAttribute("aria-expanded") !== "false";
  e.currentTarget.setAttribute("aria-expanded", !isExpanded);
  // backfaceFixed(true);
  if (e.currentTarget.getAttribute("aria-expanded") === "true") {
    backfaceFixed(true);
  } else {
    backfaceFixed(false);
  }
  document.documentElement.classList.toggle("is-drawerActive");
});
// グローバルメニューを押した時の処理
document.querySelectorAll(".js-jump").forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log("押された"); // 必要に応じて変更
    backfaceFixed(false);
    document.documentElement.classList.remove("is-drawerActive");
    document.querySelector("#js-buttonHamburger").setAttribute("aria-expanded", false);
  });
});

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

new Splide(".js-pc-mainvisual", {
  autoplay: true, // 自動再生
  type: "fade", // フェード
  rewind: true, // スライダーの終わりまで行ったら先頭に巻き戻す
  pauseOnHover: false, // カーソルが乗ってもスクロールを停止させない
  pauseOnFocus: false, // 矢印をクリックしてもスクロールを停止させない
  interval: 5000, // 自動再生の間隔
  speed: 2000, // スライダーの移動時間
  arrows: false,
}).mount();

new Splide(".js-bg-mainvisual", {
  autoplay: true, // 自動再生
  type: "fade", // フェード
  rewind: true, // スライダーの終わりまで行ったら先頭に巻き戻す
  pauseOnHover: false, // カーソルが乗ってもスクロールを停止させない
  pauseOnFocus: false, // 矢印をクリックしてもスクロールを停止させない
  interval: 5000, // 自動再生の間隔
  speed: 2000, // スライダーの移動時間
  arrows: false,
}).mount();

new Splide(".js-bg-mvv", {
  autoplay: true, // 自動再生
  type: "fade", // フェード
  rewind: true, // スライダーの終わりまで行ったら先頭に巻き戻す
  pauseOnHover: false, // カーソルが乗ってもスクロールを停止させない
  pauseOnFocus: false, // 矢印をクリックしてもスクロールを停止させない
  interval: 5000, // 自動再生の間隔
  speed: 2000, // スライダーの移動時間
  arrows: false,
}).mount();

// fvObserver.observe(fv);

// import MicroModal from "micromodal";
import { backfaceFixed } from "./backfacedFixed";

// MicroModal.init({
//   onShow: () => {
//     backfaceFixed(true);
//   },
//   onClose: () => {
//     backfaceFixed(false);
//   },
//   disableFocus: true,
//   awaitCloseAnimation: true,
//   awaitOpenAnimation: true,
//   disableScroll: true,
// });

// document.addEventListener("DOMContentLoaded", function () {
//   // 要素取得
//   const textElements = document.querySelectorAll(".js-typeShuffle");

//   // 初期高さ設定
//   textElements.forEach((elem) => {
//     console.log("高さは", elem.offsetHeight);
//     elem.style.minHeight = elem.offsetHeight + "px";
//   });

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           // entry.target.style.maxHeight = entry.target.offsetHeight + "px";
//           entry.target.classList.remove("invisible");
//           const ts = new TypeShuffle(entry.target);
//           ts.trigger("fx6");
//           observer.unobserve(entry.target);
//         }
//       });
//     },
//     {
//       rootMargin: "0px 0px -20% 0px",
//     },
//   );

//   textElements.forEach((textElement) => {
//     observer.observe(textElement);
//   });
// });
