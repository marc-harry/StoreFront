// store contains the products
function store() {
  this.products = [
    new product("APL", "Cliffs", "Eat one every…", 100, 0, 0, 0, 0, 0, 0),
    new product("AVC", "Beach Hills", "Guacamole…", 80, 0, 0, 0, 0, 0, 0),
    new product("BAN", "Sea Valleys", "These are…", 90, 0, 0, 0, 0, 0, 0),
    new product("WML", "Mountains", "Nothing…", 75, 0, 0, 0, 0, 0, 0)
  ];
  this.dvaCaption = ["Negligible", "Low", "Average", "Good", "Great" ];
  this.dvaRange = ["below 5%", "between 5 and 10%", "above 40%"];
}

store.prototype.getProduct = function (id) {
  for (var i = 0; i < this.products.length; i++) {
    if (this.products[i].id == id)
      return this.products[i];
  }
  return null;
}