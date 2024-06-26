const soda = document.getElementsByClassName("soda")[0];
const sodaWidth = 50;
const sodaHeight = 100;
const gameOverDistance = 5000; // これ以上振ったらゲームオーバー
let movingDistance = 0; // ソーダの移動距離

// 初期表示
window.addEventListener("DOMContentLoaded", () => {
  soda.style.width = `${sodaWidth}px`;
  soda.style.height = `${sodaHeight}px`;
});

soda.addEventListener("pointermove", (e) => {
  // 泡が出たら、ソーダの移動を停止
  if (document.getElementsByClassName("bubble").length) {
    return;
  }

  // 一定量振ったら、泡を出す
  if (movingDistance > gameOverDistance) {
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.style.width = `${sodaWidth / 2}px`;
    bubble.style.height = `${sodaWidth / 2}px`;
    bubble.style.left = `${soda.offsetLeft + sodaWidth / 4}px`;
    bubble.style.top = `${soda.offsetTop - sodaWidth / 2}px`;
    document.body.appendChild(bubble);
    return;
  }

  // カーソルに合わせてソーダを移動
  if (e.buttons) {
    soda.style.left = `${soda.offsetLeft + e.movementX}px`;
    soda.style.top = `${soda.offsetTop + e.movementY}px`;
    soda.setPointerCapture(e.pointerId);

    // ソーダの移動距離を積算
    movingDistance += Math.abs(e.movementX) + Math.abs(e.movementY);
  }
});
