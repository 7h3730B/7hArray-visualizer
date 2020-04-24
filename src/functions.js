const canvas = document.getElementById("arrayCanvas");
const ctx = canvas.getContext("2d");

export default {
  array: [],
  draw() {
    for (let i = 0; i <= this.array.length; i++) {
      ctx.beginPath();
      ctx.strokeRect(
        i * (900 / this.array.length).toFixed(0),
        0,
        (900 / this.array.length).toFixed(0),
        this.array[i]
      );
    }
  }
};
