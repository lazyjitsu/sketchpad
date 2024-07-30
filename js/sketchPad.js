class SketchPad {
  constructor(sketchContainer, size = 400) {
    const container = sketchContainer;
    this.spc = document.createElement("canvas");
    this.spc.width = size;
    this.spc.height = size;
    this.spc.style = `background-color:white`;
    container.appendChild(this.spc);
  }
}
