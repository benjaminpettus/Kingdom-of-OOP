import Animal from "./Animal.js";

export default class Cnidarian extends Animal{
  constructor(name, uniCellular, asexual, mobile, heterotroph){
    super(name, uniCellular, asexual, mobile, heterotroph);
    this._symmetry = "radial";
  }

}