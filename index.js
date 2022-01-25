window.onload = () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  const scale = 2;
  canvas.width = 1650 * scale;
  canvas.height = 800 * scale;
  changeBackgroundColor();
  setInterval(() => addChar(ctx), 10);
  setInterval(changeBackgroundColor, 5000);
};

function addChar(ctx) {
  ctx.font = `${Math.random() * 30}px Tahoma`;
  ctx.strokeStyle = getRandomColor();
  ctx.strokeText(
    String.fromCharCode(random(255)),
    Math.random() * canvas.width,
    Math.random() * canvas.height
  );
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
  const r = random(255);
  const g = random(255);
  const b = random(255);
  return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
}

function random(n) {
  return parseInt(Math.random() * n);
}
