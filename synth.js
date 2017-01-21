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
    this.notes = ['c','d','e','g','a'];
    this.octaves = ['3','4'];
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    // this.synth = new Tone.PolySynth(8, Tone.MonoSynth).connect(Tone.Master);
  }

  start(note) {
    this.synth.triggerAttack(note);
  }

  stop(note) {
    this.synth.triggerRelease(note);
  }

  loop() {
    const seq = [];
    for (let i = 0; i < 24; i++){
      const noteI = Math.floor(Math.random() * 5);
      const octI = Math.floor(Math.random() * 2);
      seq.push(`${this.notes[noteI]}${this.octaves[octI]}`);
    }
    console.log(seq);
    let j = 0;
    // const s = this.synth;
    Tone.Transport.scheduleRepeat((time) =>{
      this.synth.triggerAttackRelease(seq[j], "16t");
      j = (j + 1) % 24;
    }, '16t');
    Tone.Transport.bpm.value = 100;
    Tone.Transport.start();
  }


}

module.exports = Synth;
