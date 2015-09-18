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

function listPizzaSizes(pizzaSizes) {
  pizzaSizes.forEach(function(size) {
    $("#pizza-size").append('<option value=' + size + '>' + size.sizeName + ' ($' + size.sizeCost + ')' + '</option>');
  });
}

var pizzaSizes = [];
var small = new PizzaSize("Small", 7);
var medium = new PizzaSize("Medium", 10);
var large = new PizzaSize("Large", 14);
var extraLarge = new PizzaSize("Extra Large", 20);
pizzaSizes.push(small, medium, large, extraLarge);

$(document).ready(function() {
  listPizzaSizes(pizzaSizes);
  $("form#new-order").submit(function(event) {
    event.preventDefault();

    var inputtedQuantity = parseInt($("input#quantity").val());
  })
});
