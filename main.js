const Render = require('./render');
const Synth = require('./synth.js');

document.addEventListener("DOMContentLoaded", function(event) {
  window.mySynth = new Synth();
  const synthDisplay = new Render;
  synthDisplay.createButtons();
});
