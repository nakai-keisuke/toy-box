const shaker = document.getElementsByClassName("shaker")[0];

shaker.addEventListener("pointermove", (e) => {
  // 押下しているときだけシェイカーを動かす
  if (!e.buttons) return;

  shaker.style.left = `${shaker.offsetLeft + e.movementX}px`;
  shaker.style.top = `${shaker.offsetTop + e.movementY}px`;

  // マウスがシェイカーから離れてもpointermoveイベントを発生させる
  shaker.setPointerCapture(e.pointerId);
});
