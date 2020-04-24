export default {
  array: [],
  states: [],
  delay: 10,
  draw() {
    const canvas = document.getElementById("arrayCanvas");
    const ctx = canvas.getContext("2d");
    const width = canvas.width / this.array.length;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i <= this.array.length; i++) {
      // create the *path*
      ctx.beginPath();
      if (this.states[i] == 1) ctx.fillStyle = "#ff0000";
      else if (this.states[i] == -1) ctx.fillStyle = "#00d10e";
      else ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(
        i * width,
        canvas.height - this.array[i],
        width,
        this.array[i]
      );

      // draw the path to screen
      ctx.fill();
      ctx.stroke();
    }
  }
};
