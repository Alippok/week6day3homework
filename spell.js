

var Spell = function(name, damage){
   this.name = name;
   this.damage = null || damage
}

Spell.prototype = {
  create: function(foodName, replenishValue, foodConstructor){
    if (this.name === "Terra Leveria" ){
      var food = new foodConstructor(foodName, replenishValue);
      return food;
    } else  {
      return "Need more args"
    }
  },
  spawnRat: function(type, ratConstructor){
    if (this.name === "Rattus Creo"){
      var rat = new ratConstructor(type);
      return rat;
    } else { 
      return "Need more args";
    }
  }
};


module.exports = Spell