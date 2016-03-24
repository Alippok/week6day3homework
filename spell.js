

var Spell = function(name, damage){
   this.name = name;
   this.damage = null || damage
}

Spell.prototype = {
  create: function(foodName, replenishValue, foodConstructor){
    if ("terra leveria" === this.name){
      var food = new foodConstructor(foodName, replenishValue);
      return food;
    } else  {
      return "Need more args"
    }
  }
  // spawnRat: function(name, type, ratConstructor){
  //   if (name === "")
  // }
};


module.exports = Spell