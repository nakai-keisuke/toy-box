document.addEventListener("mousemove", (e) => {
  // 要素の取得 または 生成
  const mouseStalker = document.getElementById("mouseStalker")
    ? document.getElementById("mouseStalker")
    : document.createElement("div");

  // 初期設定
  if (!document.getElementById("mouseStalker")) {
    mouseStalker.id = "mouseStalker";
    mouseStalker.innerHTML = "●";
    document.body.appendChild(mouseStalker);
  }

  // カーソルに合わせて移動
  mouseStalker.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
