var assert = require('chai').assert;
var Cthulhu = require('../creatures/cthulhu');
var Human = require('../creatures/human')

describe('Cthulhu', function () {

  it('Should be a function', function () {
    assert.isFunction(Cthulhu)
  });

  it('Should instantiate the ever-pleasant cosmic nightmare, Cthulhu', function () {
    var cthulhu = new Cthulhu();

    assert.isObject(cthulhu);
  });

  it('Should have a name', function () {
    var cthulhu = new Cthulhu('Ralph');

    assert.equal(cthulhu.name, 'Ralph');
  });

  it('Should be 1000 feet tall', function () {
    var cthulhu = new Cthulhu('Ralph');

    assert.equal(cthulhu.height, '1000 feet');
  });

  it('Should have an age without a beginning or end', function () {
    var cthulhu = new Cthulhu('Ralph');

    assert.equal(cthulhu.age, Infinity);
  });

  it('Should be imprisoned beneath the sea', function () {
    var cthulhu = new Cthulhu('Ralph');

    assert.equal(cthulhu.imprisoned, true);
  });

  it('Should be free when a human summons for its release 3 times', function () {
    var cthulhu = new Cthulhu('Ralph');
    var human = new Human('Jason');

    assert.equal(cthulhu.imprisoned, true);

    human.summonMonster(cthulhu);
    assert.equal(cthulhu.imprisoned, true);

    human.summonMonster(cthulhu);
    assert.equal(cthulhu.imprisoned, true);

    human.summonMonster(cthulhu);
    assert.equal(cthulhu.imprisoned, false);
  });

  it('Should drive a human insane by looking at it', function () {
    var cthulhu = new Cthulhu('Hector');
    var human = new Human('Shayla');

    cthulhu.imprisoned = false;
    assert.equal(human.isSane, true);

    cthulhu.driveInsane(human);
    assert.equal(human.isSane, false);
  })

  it('Should not be able to drive a human insane unless it has been summoned', function () {
    var cthulhu = new Cthulhu('Christie');
    var human = new Human('Tyler');

    assert.equal(cthulhu.imprisoned, true);
    assert.equal(human.isSane, true);

    cthulhu.driveInsane(human);

    assert.equal(human.isSane, true);

    human.summonMonster(cthulhu);
    human.summonMonster(cthulhu);
    human.summonMonster(cthulhu);
    cthulhu.driveInsane(human);

    assert.equal(human.isSane, false);
  })

  it('Should be able to steal and keep human souls', function () {
    var cthulhu = new Cthulhu('Joe');
    var human1 = new Human('Louisa');
    var human2 = new Human('Brenna');
    var human3 = new Human('Jeff');

    cthulhu.imprisoned = false;
    assert.deepEqual(cthulhu.soulBottle, []);

    cthulhu.devourSouls(human1);
    cthulhu.devourSouls(human2);
    cthulhu.devourSouls(human3);

    assert.equal(cthulhu.soulBottle.length, 3)
  })

  it('Should not be able to eat souls while imprisoned', function () {
    var cthulhu = new Cthulhu('Joe');
    var human = new Human('Louisa');

    assert.equal(cthulhu.imprisoned, true);
    assert.deepEqual(cthulhu.soulBottle, []);

    cthulhu.devourSouls(human);
    assert.equal(cthulhu.soulBottle.length, 0)

    cthulhu.imprisoned = false;
    cthulhu.devourSouls(human);
    assert.equal(cthulhu.soulBottle.length, 1)
  });

  it('Should kill the human when it devours its soul', function () {
    var cthulhu = new Cthulhu('Joe');
    var human = new Human('Louisa');

    assert.equal(human.alive, true);

    cthulhu.imprisoned = false;
    cthulhu.devourSouls(human);
    assert.equal(human.alive, false);
  })

});
