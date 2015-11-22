import LivingThing from './LivingThing.js';

export default class Eukaryota extends LivingThing{
// ÷\donstructor(name, uniCellular, trueNucleus, anaerobic, asexual, mobile)
  constructor(name, uniCellular, asexual, mobile, heterotroph){
    super(name, uniCellular, true, false, asexual, mobile);
    this._heterotroph = heterotroph;
 }
}