const ball = document.createElement("div");
ball.className = "ball";
document.body.appendChild(ball);

// ボールの速度
let velocityX = 10;

setInterval(() => {
  // ボールを移動
  ball.style.left = `${ball.offsetLeft + velocityX}px`;

  // 当たり判定：壁についたら向きを反転
  if (ball.offsetLeft < 0 || ball.offsetLeft > window.innerWidth - 50) {
    velocityX = -velocityX;
  }
}, 20);
