var assert = require('chai').assert;
var Spell = require('../spell.js');
var Hero = require('../hero_play.js');
var Food = require('../food.js');

var spell1 = new Spell("velstrum", 30)
var food1 = new Food("shrub", 30)

describe("spell", function(){

  it("should have a name", function(){
    assert.equal("velstrum", spell1.name)
  });

  it("should have a damage value", function(){
    assert.equal(30, spell1.damage)
  });

  it("should be able to not take a damage value", function(){
    var spell2 = new Spell("terra leveria")
    assert.equal(null, spell2.damage)
  })

  it("should have an option to create an object", function(){
    var spell2 = new Spell("terra leveria")
    assert.equal = (food1, spell2.create("terra leveria","shrub", 30, Food))
  })


});