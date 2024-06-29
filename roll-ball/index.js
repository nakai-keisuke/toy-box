// ボールの速度を記録する変数
let velocityX = 0;
let velocityY = 0;

const ball = document.createElement("div");
ball.className = "ball";
document.body.appendChild(ball);

// ボールを掴んでいるとき
ball.addEventListener("pointermove", (e) => {
  // 押下していない場合はボールを動かさない
  if (!e.buttons) return;

  // カーソルがボールから離れても掴み続ける
  ball.setPointerCapture(e.pointerId);

  // ボールをカーソルに合わせて移動させる
  ball.style.left = `${ball.offsetLeft + e.movementX}px`;
  ball.style.top = `${ball.offsetTop + e.movementY}px`;

  // ボールの速度を記録する
  velocityX = e.movementX;
  velocityY = e.movementY;
});

// ボールを投げた後
ball.addEventListener("pointerup", () => {
  const intervalId = setInterval(() => {
    // x軸、y軸方向ともに減速させる
    velocityX = velocityX * 0.93;
    velocityY = velocityY * 0.93;

    // ボールを移動させる
    ball.style.left = `${ball.offsetLeft + velocityX}px`;
    ball.style.top = `${ball.offsetTop + velocityY}px`;

    if (
      // ほぼ停止したとき or ボールがウィンドウの端についたとき、ボールを止める
      Math.abs(velocityX) < 1 ||
      Math.abs(velocityY) < 1 ||
      ball.offsetLeft < 0 ||
      ball.offsetTop < 0 ||
      ball.offsetLeft > window.innerWidth - 50 ||
      ball.offsetTop > window.innerHeight - 50
    ) {
      clearInterval(intervalId);
    }
  }, 20);
});
