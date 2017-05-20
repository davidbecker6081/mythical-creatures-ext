var assert = require('chai').assert;
var Cthulhu = require('../creatures/cthulhu');
var Human = require('../creatures/cthulhu')

describe('Cthulhu', function () {

  it.skip('Should be a function', function () {
    assert.isFunction(Cthulhu)
  });

  it.skip('Should instantiate the ever-pleasant cosmic nightmare, Cthulhu', function () {
    var cthulhu = new Cthulhu();

    assert.isObject(cthulhu);
  });

  it.skip('Should have a name', function () {
    var cthulhu = new Cthulhu('Ralph');

    assert.equal(cthulhu.name, 'Ralph');
  });

  it.skip('Should be 1000 feet tall', function () {
    var cthulhu = new Cthulhu('Ralph');

    assert.equal(cthulhu.height, '1000 feet');
  });

  it.skip('Should have an age without a beginning or end', function () {
    var cthulhu = new Cthulhu('Ralph');

    assert.equal(cthulhu.age, Infinity);
  });

  it.skip('Should be imprisoned beneath the sea', function () {
    var cthulhu = new Cthulhu('Ralph');

    assert.equal(cthulhu.imprisoned, true);
  });

  it.skip('Should be free when a human summons for its release 3 times', function () {
    var cthulhu = new Cthulhu('Ralph');
    var human = new Human('Jason');

    assert.equal(cthulhu.imprisoned, true);
    human.summonMonster();
    assert.equal(cthulhu.imprisoned, true);
    human.summonMonster();
    assert.equal(cthulhu.imprisoned, true);
    human.summonMonster();
    assert.equal(cthulhu.imprisoned, false);
  });

  it.skip('Should drive a human insane if the human looks at it', function () {
    var cthulhu = new Cthulhu('Ralph');
    var human = new Human('Jason');

    assert.equal(human.isSane, true);
    cthulhu.driveInsane();
    assert.equal(human.isSane, false);
  })

  it.skip('Should not be able to drive a human insane unless it has been summoned', function () {
    var cthulhu = new Cthulhu('Ralph');
    var human = new Human('Jason');

    assert.equal(human.isSane, true);
    cthulhu.driveInsane();
    assert.equal(human.isSane, false);
  })
});
