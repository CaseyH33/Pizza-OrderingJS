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

function listToppings(toppingsList) {
  toppingsList.forEach(function(topping) {
    $("#topping-list").append('<li><input type="checkbox" value=' + topping + '>' + topping.toppingItem + ' +$' + topping.toppingCost + '</li>');
  });
}

var pizzaSizes = [];
var small = new PizzaSize("Small", 7);
var medium = new PizzaSize("Medium", 10);
var large = new PizzaSize("Large", 14);
var extraLarge = new PizzaSize("Extra Large", 20);
pizzaSizes.push(small, medium, large, extraLarge);

var toppingsList = [];
var pepperoni = new Topping("Pepperoni", 2);
var sausage = new Topping("Sausage", 2);
var canadianBacon = new Topping("Canadian Bacon", 2);
var bacon = new Topping("Bacon", 3);
var salami = new Topping("Salami", 3);
var olives = new Topping("Olives", 1);
var mushrooms = new Topping("Mushrooms", 1);
var greenPeppers = new Topping("Green Peppers", 1);
var pineapple = new Topping("Pineapple", 3);
var jalapenos = new Topping("Jalapeno", 1);
var extraCheese = new Topping("Extra Cheese", 3);
toppingsList.push(pepperoni, sausage, canadianBacon, bacon, salami, olives, mushrooms, greenPeppers, pineapple, jalapenos, extraCheese);


$(document).ready(function() {
  listPizzaSizes(pizzaSizes);
  listToppings(toppingsList);
  $("form#new-order").submit(function(event) {
    event.preventDefault();

    var inputtedQuantity = parseInt($("input#quantity").val());
  })
});
