const Synth = require('./synth.js');

document.addEventListener("DOMContentLoaded", function(event) {
  window.mySynth = new Synth();

  let notes = ['c', 'd', 'e', 'g', 'a'];
  let octave = '3';

  let buttons = Array.from(document.getElementsByTagName('li'));

  buttons.forEach((button, i) => {
    if (i > 4) octave = '4';
    button.setAttribute('note', `${notes[i % 5]}${octave}`);

    button.addEventListener('mousedown', (e) => {
      mySynth.start(e.currentTarget.attributes.note.value);
    });

    button.addEventListener('mouseup', (e) => {
      mySynth.stop(e.currentTarget.attributes.note.value);
    });
  });
});
