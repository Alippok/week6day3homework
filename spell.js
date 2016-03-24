

var Spell = function(name, damage){
   this.name = name;
   this.damage = null || damage
}

Spell.prototype = {
  create: function(name,foodName, replenishValue, foodConstructor){
    if (name === "terra leveria"){
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