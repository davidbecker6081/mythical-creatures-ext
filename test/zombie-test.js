var assert = require('chai').assert;
var Zombie = require('../creatures/zombie');
var Human = require('../creatures/human')

describe('Zombie', function () {

  it('Should be a function', function () {
    assert.isFunction(Zombie);
  });

  it('Should instantiate a zombie from the dead!!', function () {
    var zombie = new Zombie();

    assert.isObject(zombie)
  })

  it('Should be undead', function () {
    var zombie = new Zombie();

    assert.equal(zombie.alive, false);
  })

  it('Should have a name, and that name should be Rob', function () {
    var zombie = new Zombie();

    assert.equal(zombie.name, 'Rob');
  })

  it('Should eat braaaaaiiiiiinnnnnnsssss!!!', function () {
    var zombie = new Zombie();
    var human = new Human('George')

    zombie.eatBrains(human);

    assert.equal(zombie.brainPower, 1)
  })

  it('Should kill a human when it eats its brain', function () {
    var zombie = new Zombie();
    var human = new Human('Juan')

    assert.equal(human.alive, true)

    zombie.eatBrains(human);

    assert.equal(human.alive, false)
  })

  it('Should not be able to eat the same humans brain more than once', function () {
    var zombie = new Zombie();
    var human = new Human('Ciara')

    assert.equal(human.alive, true)

    zombie.eatBrains(human);
    assert.equal(human.alive, false)
    assert.equal(zombie.brainPower, 1)

    zombie.eatBrains(human)
    assert.equal(zombie.brainPower, 1)
  })

  it('Should become a super-zombie after eating 5 brains', function () {
    var zombie = new Zombie();
    var human1 = new Human('JC')
    var human2 = new Human('Lindsay')
    var human3 = new Human('James')
    var human4 = new Human('Nik')
    var human5 = new Human('Kristi')

    assert.equal(zombie.brainPower, 0);
    assert.equal(zombie.superZombie, false);

    zombie.eatBrains(human1);
    zombie.eatBrains(human2);
    zombie.eatBrains(human3);

    assert.equal(zombie.brainPower, 3);
    assert.equal(zombie.superZombie, false);

    zombie.eatBrains(human4);
    zombie.eatBrains(human5);

    assert.equal(zombie.brainPower, 5);
    assert.equal(zombie.superZombie, true);
  })
});
