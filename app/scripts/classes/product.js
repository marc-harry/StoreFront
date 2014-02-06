// product class
function product(id, name, description, price,
                 cal, carot, vitc, folate, potassium, fiber) {
  this.id = id; 
  this.name = name;
  this.description = description;
  this.price = price;
  this.cal = cal;
  this.nutrients = {
    "Carotenoid": carot,
    "Vitamin C": vitc,
    "Folates": folate,
    "Potassium": potassium,
    "Fiber": fiber
  };
}