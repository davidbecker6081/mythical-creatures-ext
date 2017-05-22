function Zombie() {
  this.alive = false;
  this.name = 'Rob';
  this.brainPower = 0;
  this.superZombie = false;
}

Zombie.prototype.eatBrains = function(human) {
  if (human.alive === true) {
    human.alive = false;
    this.brainPower++;
    if (this.brainPower >= 5) {
      this.superZombie = true;
    }
  } 
}

module.exports = Zombie;
