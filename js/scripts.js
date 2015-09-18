function Pizza(quantity, pizzaSize, toppings) {
  this.quantity = quantity;
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
}

Pizza.prototype.price = function() {
  var cost = this.pizzaSize.cost;
  this.toppings.forEach(function(topping) {
    cost += topping.cost;
  });
  return cost*this.quantity;
}

function Topping(toppingItem, cost) {
  this.toppingItem = toppingItem;
  this.cost = cost;
}

function PizzaSize(sizeName, cost) {
  this.sizeName = sizeName;
  this.cost = cost;
}

function sortByCost(list) {
  list.sort(function(obj1, obj2) {
        if(obj1.cost > obj2.cost) {
            return 1;
        }
        if(obj1.cost < obj2.cost) {
            return -1;
        }
        return 0;
    });
}

function listPizzaSizes(pizzaSizes) {
  sortByCost(pizzaSizes);
  pizzaSizes.forEach(function(size, index) {
    $("#pizza-size").append('<option value=' + index + '>' + size.sizeName + ' ($' + size.cost + ')' + '</option>');
  });
}

function listToppings(toppingsList) {
  sortByCost(toppingsList);
  toppingsList.forEach(function(topping, index) {
    $("#toppings").append('<option value=' + index + '>' + topping.toppingItem + ' +$' + topping.cost + '</option>');
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


    var inputtedQuantity = parseInt($("input#quantity").val());
    console.log(pizzaSizes[0]);
    var inputtedSizeIndex = $("#pizza-size").val();
    var inputtedSize = pizzaSizes[inputtedSizeIndex];
    var inputtedToppings = [];
    $("#toppings option:selected").each(function(i, selected) {
      var currentIndex = $(selected).val();
      inputtedToppings[i] = toppingsList[currentIndex];
    });

    var newPizza = new Pizza(inputtedQuantity, inputtedSize, inputtedToppings);

    var totalCost = newPizza.price();
    $(".total-cost").text(totalCost);
    $("#result").show();
    event.preventDefault();
  });
});
