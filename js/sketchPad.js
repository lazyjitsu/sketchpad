class SketchPad {
  constructor(sketchContainer, size = 400) {
    const container = sketchContainer;
    this.spc = document.createElement("canvas");
    this.spc.width = size;
    this.spc.height = size;
    this.spc.style = `
      background-color:white;
      box-shadow: 0px 0px 10px 2px black;
    `;
    container.appendChild(this.spc);

    this.ctx = this.spc.getContext("2d");

    this.isDrawing = false;
    this.paths = [];

    this.#startListeners();
  }
  #startListeners() {
    this.spc.onmousedown = (evt) => {
      const mouse = this.#getMouse(evt);
      this.paths = [mouse];
      this.isDrawing = true;
    };
    this.spc.onmousemove = (evt) => {
      if (this.isDrawing) {
        const mouse = this.#getMouse(evt);
        this.paths.push(mouse);
        this.#redraw();
      }
    };
    this.spc.onmouseup = () => {
      this.isDrawing = false;
    };
  }
  #getMouse = (e) => {
    const rect = this.spc.getBoundingClientRect();
    return [
      Math.round(e.clientX - rect.left),
      Math.round(e.clientY - rect.top),
    ];
  };
  #redraw = () => {
    this.ctx.clearRect(0, 0, this.spc.width, this.spc.height);
    draw.path(this.ctx, this.paths);
  };
}
