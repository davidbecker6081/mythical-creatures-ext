function Cthulhu(name) {
  this.name = name;
  this.height = '1000 feet';
  this.age = Infinity;
  this.imprisoned = true;
  this.soulBottle = [];
}

Cthulhu.prototype.driveInsane = function (human) {
  if (this.imprisoned === true) {
    human.isSane = true;
  } else {
    human.isSane = false;
  }
};

Cthulhu.prototype.devourSouls = function (human) {
  if (this.imprisoned === false) {
    human.alive = false;
    this.soulBottle.push(human);
  }
}

module.exports = Cthulhu;
