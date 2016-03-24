var assert = require('chai').assert;
var Spell = require('../spell.js');
var Hero = require('../hero_play.js');
var Food = require('../food.js');
var Rat = require('../rat.js')

var spell1 = new Spell("velstrum", 30)
var food1 = new Food("shrub", 30)
var rat1 = new Rat("giant rat")


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
  });

  it("should have an option to create an object", function(){
    var spell2 = new Spell("terra leveria")
    assert.equal = (food1, spell2.create("shrub", 30, Food))
  });

  it("should not create a food if spell name is incorrect", function(){
    assert.equal = ("Need more args", spell1.create("berry", 10, Food))
  });

});