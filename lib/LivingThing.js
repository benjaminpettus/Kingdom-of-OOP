export default class LivingThing {
  constructor(name, uniCellular, trueNucleus, anaerobic, asexual, mobile) {
    //constructor stuff here
    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;
  }

  get name (){
    return this._name;
  }

  set name (name){
    this._name = name;
  }

  get uniCellular(){
    return this._uniCellular;
  }

  set uniCellular(boolean){
    this._uniCellular = boolean;
  }

  get multiCellular(){
    return !this._uniCellular;
  }

  set multiCellular(uniCellular){
    this.uniCellular = !uniCellular;
  }

  get eukaryote (){
    return this._trueNucleus;
  }
}