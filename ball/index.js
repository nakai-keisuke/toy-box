// ボールの移動量（速度）を記録する変数
let velocityX = 0;
let velocityY = 0;

const ball = document.createElement("div");
ball.className = "ball";
document.body.appendChild(ball);

ball.addEventListener("pointermove", (e) => {
  // 押下していないときは処理しない
  if (!e.buttons) return;

  // カーソルがボールから離れても掴み続ける
  ball.setPointerCapture(e.pointerId);

  // カーソルに合わせてボールを移動させる
  ball.style.left = `${ball.offsetLeft + e.movementX}px`;
  ball.style.top = `${ball.offsetTop + e.movementY}px`;

  // ボールの速度を記録
  velocityX = e.movementX;
  velocityY = e.movementY;
});

// マウスのボタンを離したとき
ball.addEventListener("pointerup", () => {
  const intervalID = setInterval(() => {
    // yに値を足して重力を表現する
    velocityY += 0.6;

    // 記録しておいたボールの速度を足して、ボールを飛ばす
    ball.style.left = `${ball.offsetLeft + velocityX}px`;
    ball.style.top = `${ball.offsetTop + velocityY}px`;

    // ボールが画面の端についたら停止
    if (
      ball.offsetLeft < 50 ||
      ball.offsetTop < 50 ||
      ball.offsetLeft > window.innerWidth - 50 ||
      ball.offsetTop > window.innerHeight - 50
    ) {
      clearInterval(intervalID);
    }
  }, 20);
});
