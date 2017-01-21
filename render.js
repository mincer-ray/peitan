class Render {
  constructor() {
    this.stage = new createjs.Stage("synth");

    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", this.stage);
  }

  createButtons() {
    let y = 0;
    let x = 0;
    let notes = ['c', 'd', 'e', 'g', 'a'];

    for (let i = 0 ; i < 8 ; i++) {
      var graphics = new createjs.Graphics().beginFill("#000000").drawRect(0 + (x * 110), y, 100, 100);
      var button = new createjs.Shape(graphics);
      button.name = (`${notes[i % 5]}2`);

      this.stage.addChild(button);

      x += 1;
      if (x === 4) {
        y = 110;
        x = 0;
      }
    }
  }
}

module.exports = Render;
