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

import { TypeShuffle } from "./typeShuffle";
// import { TypeShuffle2 } from "./typeShuffle2";
let timeoutId;
const loop = () => {
  const codeElement = document.querySelectorAll(".code-style--white ");
  codeElement.forEach((elem) => {
    // elem.classList.remove("invisible");
    const ts = new TypeShuffle(elem);
    ts.trigger("fx7");
  });

  // 3秒後に次の処理を実行
  timeoutId = setTimeout(loop, 7000);
};

// ループを停止するには、clearTimeout を使用します
const stopLoop = () => {
  console.log("ループ処理をやめます");
  clearTimeout(timeoutId);
};

const fv = document.querySelector("#js-fv");
const fvObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      loop();
      console.log("=============fv画面内です=============");
    } else {
      stopLoop();
      console.log("=============fv画面の外です================");
    }
  });
});

fvObserver.observe(fv);

import MicroModal from "micromodal";
import { backfaceFixed } from "./backfacedFixed";

MicroModal.init({
  onShow: () => {
    backfaceFixed(true);
  },
  onClose: () => {
    backfaceFixed(false);
  },
  disableFocus: true,
  awaitCloseAnimation: true,
  awaitOpenAnimation: true,
  disableScroll: true,
});

document.addEventListener("DOMContentLoaded", function () {
  // 要素取得
  const textElements = document.querySelectorAll(".js-typeShuffle");

  // 初期高さ設定
  textElements.forEach((elem) => {
    console.log("高さは", elem.offsetHeight);
    elem.style.minHeight = elem.offsetHeight + "px";
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // entry.target.style.maxHeight = entry.target.offsetHeight + "px";
          entry.target.classList.remove("invisible");
          const ts = new TypeShuffle(entry.target);
          ts.trigger("fx6");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px 0px -20% 0px",
    },
  );

  textElements.forEach((textElement) => {
    observer.observe(textElement);
  });
});

// textElements.forEach((textElement) => {
//   observer.observe(textElement);
// });

const numberInput = document.getElementById("number");
const errorMessage = document.querySelector(".js-numberError");

numberInput.addEventListener("input", () => {
  const number = numberInput.value;
  errorMessage.innerText = "";
  // console.log("打ち込まれた", errorMessage);

  // エラーメッセージをクリア
  if (number === "") {
    errorMessage.innerText = "";
    return;
  }

  // 数字のみかどうかチェック
  if (!/^[0-9]+$/.test(number)) {
    // 警告を出す
    errorMessage.innerText = "半角数字のみ可";
    return;
  }

  // 文字数が11文字を超えているかどうかチェック
  const length = number.split("").filter((c) => c.match(/[^\x00-\x7F]/)).length + number.length;
  if (length > 11) {
    // 警告を出す
    errorMessage.innerHTML = "11文字以内で入力してください";
    return;
  }
});

const emailInput = document.getElementById("email");
const emailErrorMessage = document.querySelector(".js-emailError");
console.log("emailInput====", emailInput);
emailInput.addEventListener("input", () => {
  const email = emailInput.value;
  // console.log("打ち込まれた", errorMessage)
  emailErrorMessage.innerText = "";

  // エラーメッセージをクリア
  if (email === "") {
    emailErrorMessage.innerText = "";
    return;
  }

  // 数字のみかどうかチェック
  if (!/^[0-9a-zA-Z.@-]+$/.test(email)) {
    // 警告を出す
    emailErrorMessage.innerText = "半角英数字のみ可";
    return;
  }
  // // 文字数が11文字を超えているかどうかチェック
  // const length = number.split("").filter((c) => c.match(/[^\x00-\x7F]/)).length + number.length;
  // if (length > 11) {
  //   // 警告を出す
  //   errorMessage.innerHTML = "11文字以内で入力してください";
  //   return;
  // }
});

// import Lottie from "lottie-web";

// if (window.innerWidth >= 900) {
//   const service_graphic_pc = Lottie.loadAnimation({
//     container: document.getElementById("js-info"),
//     renderer: "svg",
//     loop: false,
//     autoplay: false,
//     path: "assets/img/yoko_002.json",
//   });
// } else {
//   const animationItem = Lottie.loadAnimation({
//     container: document.getElementById("js-info"),
//     renderer: "svg",
//     loop: false,
//     autoplay: false,
//     path: "assets/img/yoko_002.json",
//   });
// }
import Lottie from "lottie-web";

function getJsonPathByWindowWidth() {
  console.log("呼ばれました");
  if (window.innerWidth >= 900) {
    console.log("pcバーのやつです");
    return "assets/img/yoko_002.json";
  } else {
    console.log("スマホバーのやつです");
    return "assets/img/data.json";
  }
}

const animationItem = Lottie.loadAnimation({
  container: document.getElementById("js-info"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: getJsonPathByWindowWidth(),
});

const lottie = document.querySelector("#js-info");

const lottieObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animationItem.play();
    }
  });
});

lottieObserver.observe(lottie);

let variableWidth = document.body.clientWidth;
window.addEventListener("resize", () => {
  let timeoutID = 0;
  let delay = 500;
  if (animationItem) {
    console.log("中身は", animationItem);
    console.log("アニメーションあります========");
    // animationItem.destroy();
    let LottieDestroy = () => {
      console.log("lottie壊します========");
      return new Promise((resolve) => {
        const dom = document.querySelector("#js-info");
        dom.innerHTML = "";
        console.log("domは===", dom);
        resolve();
      });
    };
    LottieDestroy().then(() => {
      console.log("lottieは", animationItem);
      // console.log("domは====", dom);
      console.log("destroyした後=========");
      const a = Lottie.loadAnimation({
        container: document.getElementById("js-info"),
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: getJsonPathByWindowWidth(),
      });

      a.play();
    });
  }
  // animationItem.play();
  if (document.body.clientWidth !== variableWidth) {
    console.log("risizeした");
    const textElements = document.querySelectorAll(".js-typeShuffle");
    textElements.forEach((elem) => {
      const setHeight = elem.getAttribute("style").replace(/height: \d+px;/, "height: fit-content;");
      elem.setAttribute("style", setHeight);
    });
  }
});
