window.onload = () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  let seconds = 0;
  const scale = 2;
  canvas.width = 1650 * scale;
  canvas.height = 800 * scale;
  changeBackgroundColor();
  setInterval(() => {
    const date = new Date().toString();
    ctx.font = `${Math.random() * 30}px Tahoma`;
    seconds++;
    const { r, g, b } = randomColor();
    ctx.strokeStyle = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
    ctx.strokeText(
      String.fromCharCode(r),
      Math.random() * canvas.width,
      Math.random() * canvas.height
    );
  }, 10);

  setInterval(() => {
    changeBackgroundColor();
  }, 5000);
};

function changeBackgroundColor() {
  const { r, g, b } = randomColor();
  document.body.style.backgroundColor = `#${r.toString(16)}${g.toString(
    16
  )}${b.toString(16)}`;
}

function randomColor() {
  return {
    r: parseInt(Math.random() * 255),
    g: parseInt(Math.random() * 255),
    b: parseInt(Math.random() * 255),
  };
}
