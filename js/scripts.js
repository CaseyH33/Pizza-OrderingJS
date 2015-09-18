function Pizza(quantity, pizzaSize, toppings) {
    this.quantity = quantity;
    this.pizzaSize = pizzaSize;
    this.toppings = toppings;
}

Pizza.prototype.price = function() {
  var cost = this.pizzaSize.sizeCost;
  this.toppings.forEach(function(topping) {
    cost += topping.toppingCost;
  });
  return cost*this.quantity;
}

function Topping(toppingItem, toppingCost) {
    this.toppingItem = toppingItem;
    this.toppingCost = toppingCost;
}

function PizzaSize(sizeName, sizeCost) {
    this.sizeName = sizeName;
    this.sizeCost = sizeCost;
}
