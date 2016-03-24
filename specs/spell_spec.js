var assert = require('chai').assert;
var Spell = require('../spell.js');
var Hero = require('../hero_play.js');
var Food = require('../food.js');

var spell1 = new Spell("avada kedavra")


describe("spell", function(){

  it("should have a name", function(){
    assert.equal("avada kedavra", spell1.name)
  });



});