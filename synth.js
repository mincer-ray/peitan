class Synth {

  constructor() {
    this.synth = new Tone.PolySynth(10, Tone.DuoSynth).connect(Tone.Master);
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

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
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
