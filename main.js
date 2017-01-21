const Synth = require('./synth.js');

document.addEventListener("DOMContentLoaded", function(event) {
  window.mySynth = new Synth();
  // window.bass = new Synth();
  // window.lead = new Synth();

  let bottomRow = [90, 88, 67, 86, 66, 78, 77, 188, 190, 191];
  let topRow = [81, 87, 69, 82, 84, 89, 85, 73, 79, 80];

  let notes = ['c', 'd', 'e', 'g', 'a'];
  let octave = undefined;
  let buttons = Array.from(document.getElementsByTagName('li'));

  buttons.forEach((button, i) => {
    if (i <= 4) octave = '3';
    if (i > 4) octave = '4';

    button.setAttribute('note', `${notes[i % 5]}${octave}`);

    button.addEventListener('mousedown', (e) => {
      mySynth.start(e.currentTarget.attributes.note.value);
    });

    button.addEventListener('mouseup', (e) => {
      mySynth.stop(e.currentTarget.attributes.note.value);
    });
  });

  bottomRow.forEach(function (keyCode, i) {
    let octave = '1';
    if (i > 4) octave = '2';

    window.addEventListener('keydown', function (e) {
      let oct = [octave].slice(0)[0];
      if (e.keyCode === keyCode) {
        mySynth.start(`${notes[i % 5]}${oct}`);
      }
    });

    window.addEventListener('keyup', function (e) {
      let oct = [octave].slice(0)[0];
      if (e.keyCode === keyCode) {
        mySynth.stop(`${notes[i % 5]}${oct}`);
      }
    });
  });

  topRow.forEach((keyCode, i) => {
    let octave = '5';
    if (i > 4) octave = '6';

    window.addEventListener('keydown', (e) => {
      if (e.keyCode === keyCode) {
        mySynth.start(`${notes[i % 5]}${octave}`);
      }
    });

    window.addEventListener('keyup', (e) => {
      if (e.keyCode === keyCode) {
        mySynth.stop(`${notes[i % 5]}${octave}`);
      }
    });
  });
});
