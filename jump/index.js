const box = document.createElement("div");
box.className = "box";
document.body.appendChild(box);

let isJump = false;

document.body.addEventListener("keydown", (e) => {
  // 右
  if (e.key === "ArrowRight") {
    box.style.left = `${box.offsetLeft + 10}px`;
  }

  // 左
  if (e.key === "ArrowLeft") {
    box.style.left = `${box.offsetLeft - 10}px`;
  }

  // ジャンプ
  if (e.key === "ArrowUp") {
    // ジャンプ中に↑ボタンを押してもスルー
    if (isJump) return;
    isJump = true;

    let height = 0;
    let count = 0;

    const intervalId = setInterval(() => {
      // ジャンプの高さを求める二次方程式
      height = -((count - 7) ** 2) + 50;
      box.style.bottom = height > 0 ? `${height}px` : "0px";
      count++;

      // 床に到達したら停止
      if (height <= 0) {
        isJump = false;
        clearInterval(intervalId);
      }
    }, 50);
  }
});
