function Human(name) {
  this.name = name;
  this.summonCount = 0;
  this.isSane = true;
  this.alive = true;
}

Human.prototype.summonMonster = function (cthulhu) {
  this.summonCount++;
  if (this.summonCount === 3) {
    cthulhu.imprisoned = !cthulhu.imprisoned;
  }
};

module.exports = Human;
