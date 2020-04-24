export default {
  array: [],
  draw() {
    const canvas = document.getElementById("arrayCanvas");
    const ctx = canvas.getContext("2d");
    const width = canvas.width / this.array.length;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i <= this.array.length; i++) {

      // create the *path*
      ctx.beginPath()
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(i * width, canvas.height - this.array[i], width, this.array[i]);

      // draw the path to screen
      ctx.fill()
      ctx.stroke()
    }
  }
};