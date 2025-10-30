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

// // ---- helpers ----
// const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// // paceOptions を先にセット
// window.paceOptions = {
//   startOnPageLoad: false, // 自分で start するので false 推奨
//   document: true,
//   ghostTime: 0,
//   minTime: 2000,
//   elements: { selectors: ["img"] }, // ← 監視対象を与える
//   ajax: { trackMethods: ["GET", "POST"], trackWebSockets: true },
//   // ここから“ゆっくり化”パラメータ
//   // initialRate: 0.015, // デフォより低めに
//   // easeFactor: 0.9, // 追従を弱める
//   // maxProgressPerFrame: 2, // 1フレーム最大2%
//   // catchupTime: 9000, // 追いつきはややゆっくり
// };

// // 動的 import（ここで pace-js が options を読む）
// const do_first = async () => {
//   await import("pace-js");
//   import("pace-js/themes/blue/pace-theme-loading-bar.css");

//   // Splide
//   const fvSplide = new Splide(".js-mainvisual", {
//     autoplay: true,
//     type: "fade",
//     rewind: true,
//     pauseOnHover: false,
//     pauseOnFocus: false,
//     interval: 5000,
//     speed: 2000,
//     arrows: false,
//   });

//   let ran = false;

//   async function init() {
//     if (ran) return;
//     ran = true;

//     const loading = document.getElementById("js-loading");
//     const drawer = document.getElementById("js-drawer");
//     await sleep(800);
//     if (loading) {
//       loading.classList.add("js-loaded");
//     }

//     fvSplide.mount();
//     if (drawer) drawer.classList.add("js-display-block");
//     await sleep(1500);
//     if (typeof backfaceFixed === "function") backfaceFixed(false);
//     await sleep(4000);
//     if (loading) {
//       loading.classList.add("js-display-none");
//     }
//   }
//   backfaceFixed(true);
//   Pace.start();
//   Pace.once("done", init);
// };

// const firstVisit = !sessionStorage.getItem("visited");
// if (firstVisit) {
//   sessionStorage.setItem("visited", "first");
//   if (typeof backfaceFixed === "function") backfaceFixed(true);

//   // 画像等の読み込みが始まってから起動
//   window.addEventListener("load", async () => {
//     do_first();
//   });
// } else {
//   const fvSplide = new Splide(".js-mainvisual", {
//     autoplay: true,
//     type: "fade",
//     rewind: true,
//     pauseOnHover: false,
//     pauseOnFocus: false,
//     interval: 5000,
//     speed: 2000,
//     arrows: false,
//   });
//   // 2回目以降はローディングを即消して実行
//   const loading = document.getElementById("js-loading");
//   if (loading) loading.style.display = "none";
//   const drawer = document.getElementById("js-drawer");
//   await sleep();
//   if (loading) {
//     loading.classList.add("js-loaded");
//   }

//   fvSplide.mount();
//   if (drawer) drawer.classList.add("js-display-block");
//   await sleep();
//   if (typeof backfaceFixed === "function") backfaceFixed(false);
//   await sleep();
//   if (loading) {
//     loading.classList.add("js-display-none");
//   }
// }

// ---- helpers ----
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// paceOptions（手動起動に変更）
window.paceOptions = {
  startOnPageLoad: false, // ← 自動起動を切る
  document: true,
  minTime: 2500,
  // ghostTime: 700,
  initialRate: 0.15,
  easeFactor: 0.09,
  maxProgressPerFrame: 20,
  catchupTime: 9000,
  // 画像/動画の読み込みも追わせたいなら有効化（任意）
  // elements: { selectors: ['img', 'video'] },
  // Ajaxも重い時だけ表示したいなら（任意）
  // ajax: { trackMethods: ['GET','POST'], trackWebSockets: true },
  // restartOnRequestAfter: 300,
};

// Pace 読み込み（Promiseで/TLA禁止）
function loadPace() {
  return Promise.all([import("pace-js"), import("pace-js/themes/blue/pace-theme-loading-bar.css")]);
}

// function mountSplide() {
//   const fvSplide = new Splide(".js-mainvisual", {
//     perPage: 1,
//     perMove: 1,
//     fixedWidth: "100%",
//     autoplay: true,
//     type: "fade",
//     rewind: true,
//     pauseOnHover: false,
//     pauseOnFocus: false,
//     interval: 6500,
//     speed: 2000,
//     arrows: false,
//     drag: false,
//   });
//   fvSplide.mount();
// }

function mountSplide() {
  const fvSplide = new Splide(".js-mainvisual", {
    perPage: 1,
    perMove: 1,
    autoplay: true, // 自動再生
    type: "fade", // フェード
    rewind: true, // スライダーの終わりまで行ったら先頭に巻き戻す
    pauseOnHover: false, // カーソルが乗ってもスクロールを停止させない
    pauseOnFocus: false, // 矢印をクリックしてもスクロールを停止させない
    interval: 6500, // 自動再生の間隔
    speed: 2000, // スライダーの移動時間
    arrows: false,
    drag: false,
  });
  fvSplide.mount();
}

let ran = false;

function initOnce(jsloadingtime = 2100) {
  if (ran) return;
  ran = true;

  const loading = document.getElementById("js-loading");
  const drawer = document.getElementById("js-drawer");
  const contents = document.getElementById("js-contents");
  const splide_slide = document.getElementById("js-mainvisual");
  const header = document.getElementById("js-header");

  (async () => {
    await sleep(jsloadingtime);
    if (loading) loading.classList.add("js-loaded");
    if (contents) contents.style.visibility = "visible";
    if (header) header.style.opacity = "100%";
    mountSplide();
    if (splide_slide) splide_slide.style.opacity = "100%";
    if (drawer) drawer.classList.add("js-display-block");
    if (typeof backfaceFixed === "function") backfaceFixed(false);
    await sleep(2000);
    if (loading) loading.classList.add("js-display-none");
  })();
}

window.addEventListener("DOMContentLoaded", () => {
  backfaceFixed(true);
});
// ---- main ----
const firstVisit = sessionStorage.getItem("visited") === null;

loadPace().then(() => {
  if (firstVisit) {
    sessionStorage.setItem("visited", "first");
    if (typeof backfaceFixed === "function") backfaceFixed(true);

    // ← 先に done を仕込む
    Pace.once("done", initOnce);
    // ← その後で確実に start
    Pace.start();
  } else {
    // 2回目以降はローディング非表示＆直ちに初期化
    const loading = document.getElementById("js-loading");
    if (loading) loading.style.display = "none";
    initOnce(0);
  }
});

// // ---- helpers ----
// const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// // paceOptions は import 前に
// window.paceOptions = {
//   startOnPageLoad: false, // 手動起動
//   document: true,
//   minTime: 4000, // 最低2秒表示
//   ghostTime: 500, // 100%後に0.5秒だけ残す
// };

// // pace を動的読み込みして「準備完了」を約束
// const paceReady = (async () => {
//   await import("pace-js");
//   await import("pace-js/themes/blue/pace-theme-loading-bar.css");
//   return true;
// })();

// // init は外側で定義してどこからでも呼べるように
// let ran = false;
// async function init() {
//   if (ran) return;
//   ran = true;

//   const loading = document.getElementById("js-loading");
//   const drawer = document.getElementById("js-drawer");

//   // ちょい余韻（CSSトランジション合わせ）
//   await sleep(500);
//   if (loading) loading.classList.add("js-loaded");

//   // Splide はここで作ってすぐ mount
//   const fvSplide = new Splide(".js-mainvisual", {
//     autoplay: true,
//     type: "fade",
//     rewind: true,
//     pauseOnHover: false,
//     pauseOnFocus: false,
//     interval: 2000,
//     speed: 2000,
//     arrows: false,
//   });
//   fvSplide.mount();

//   if (drawer) drawer.classList.add("js-display-block");
//   if (typeof backfaceFixed === "function") backfaceFixed(false);

//   // 表示終了（minTime/ghostTimeに任せるので、ここでの長い待機は不要）
//   if (loading) loading.classList.add("js-display-none");
// }

// // ---- main ----
// const firstVisit = !sessionStorage.getItem("visited");

// (async () => {
//   // pace の読み込み完了を待つ（重要）
//   await paceReady;

//   if (firstVisit) {
//     sessionStorage.setItem("visited", "first");
//     if (typeof backfaceFixed === "function") backfaceFixed(true);

//     // ページのリソース読み込み開始後に起動
//     window.addEventListener("load", () => {
//       // done -> init は一度だけ
//       Pace.once("done", init);
//       Pace.start();
//     });
//   } else {
//     // 2回目以降はローディングを即消して実行
//     const loading = document.getElementById("js-loading");
//     if (loading) loading.style.display = "none";
//     init();
//   }
// })();

// ---- main ----
// const firstVisit = !sessionStorage.getItem("visited");
// if (firstVisit) {
//   sessionStorage.setItem("visited", "first");
//   if (typeof backfaceFixed === "function") backfaceFixed(true);

//   // 画像等の読み込みが始まってから起動
//   window.addEventListener("load", async () => {
//     Pace.start();
//     await sleep(300);
//     init();
//   });
// } else {
//   // 2回目以降はローディングを即消して実行
//   const loading = document.getElementById("js-loading");
//   if (loading) loading.style.display = "none";
//   init();
// }

// ヘルパ
// const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// const fvSplide = new Splide(".js-mainvisual", {
//   autoplay: true,
//   type: "fade",
//   rewind: true,
//   pauseOnHover: false,
//   pauseOnFocus: false,
//   interval: 5000,
//   speed: 2000,
//   arrows: false,
// });

// let didRun = false; // 二重実行ガード

// async function runOnce() {
//   if (didRun) return;
//   didRun = true;

//   const loadingID = document.getElementById("js-loading");
//   const drawer = document.getElementById("js-drawer");

//   // ローディング非表示演出
//   if (loadingID) {
//     loadingID.classList.add("js-loaded");
//     await sleep(500);
//   }

//   // スライダー開始（ここで mount）
//   fvSplide.mount();

//   if (drawer) {
//     drawer.classList.add("js-display-block");
//   }

//   backfaceFixed?.(false);

//   if (loadingID) {
//     await sleep(500);
//     loadingID.classList.add("js-display-none");
//   }
// }

// // --- 初回訪問のみローディング ---
// if (!sessionStorage.getItem("visited")) {
//   sessionStorage.setItem("visited", "first");
//   backfaceFixed?.(true);

//   // Pace が完了したら解除
//   Pace.once("done", () => {
//     runOnce();
//   });

//   // フォールバック（例えば10秒）— Paceが終わらなくても強制解除
//   setTimeout(runOnce, 10000);

//   // 念のため window.load でもトリガ
//   window.addEventListener("load", () => setTimeout(runOnce, 1000));
// } else {
//   // 2回目以降はローディングを即消して実行
//   const loadingID = document.getElementById("js-loading");
//   if (loadingID) loadingID.style.display = "none";
//   runOnce();
// }

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
  interval: 6500, // 自動再生の間隔
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
  interval: 6500, // 自動再生の間隔
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
