import Character from "./Сharacter";

export default class Daemon extends Character {
  constructor(name) {
    super(name, "Daemon");
    this.attack = 10;
    this.deffence = 40;
  }
}