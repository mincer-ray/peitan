class Synth {

  constructor() {
    this.synth = new Tone.PolySynth(8, Tone.DuoSynth).connect(Tone.Master);
    // this.synth.set({
	  //    "filter" : {
		//        "type" : "highpass"
	  //       },
	  //        "envelope" : {
		//            "attack" : 0.25,
    //            "decay" : 0,
    //            "sustain" : 0,
    //            "release" : 0
	  //         }
    //   });
  }

  start(note) {
    this.synth.triggerAttack(note);
  }

  stop(note) {
    this.synth.triggerRelease(note);
  }

  loop() {

  }
}

module.exports = Synth;
