//Pizza constructor
function Pizza(quantity, pizzaSize, toppings) {
  this.quantity = quantity;
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
}

//Prototype to calculate the cost of an order
Pizza.prototype.price = function() {
  var cost = this.pizzaSize.cost;
  this.toppings.forEach(function(topping) {
    cost += topping.cost;
  });
  return cost*this.quantity;
}

//Topping constructor
function Topping(toppingItem, cost) {
  this.toppingItem = toppingItem;
  this.cost = cost;
}

//Pizza size constructor
function PizzaSize(sizeName, cost) {
  this.sizeName = sizeName;
  this.cost = cost;
}

//Sorts an array by the cost, can be used on both Topping and PizzaSize
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

//Appends the Pizza Size select list with all sizes
function listPizzaSizes(pizzaSizes) {
  sortByCost(pizzaSizes);
  pizzaSizes.forEach(function(size, index) {
    $("#pizza-size").append('<option value=' + index + '>' + size.sizeName + ' ($' + size.cost + ')' + '</option>');
  });
}

//Appends the Toppings select list with all sizes
function listToppings(toppingsList) {
  sortByCost(toppingsList);
  toppingsList.forEach(function(topping, index) {
    $("#toppings").append('<option value=' + index + '>' + topping.toppingItem + ' +$' + topping.cost + '</option>');
  });
}

//Available Pizza Sizes
var pizzaSizes = [];
var small = new PizzaSize("Small", 7);
var medium = new PizzaSize("Medium", 10);
var large = new PizzaSize("Large", 14);
var extraLarge = new PizzaSize("Extra Large", 20);
pizzaSizes.push(small, medium, large, extraLarge);

//Available Toppings
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
  //List all available sizes and toppings
  listPizzaSizes(pizzaSizes);
  listToppings(toppingsList);
  //This will make the field size of the toppings list to show all toppings
  $("#toppings").attr("size", toppingsList.length);

  $("form#new-order").submit(function(event) {
    //Get the inputted quantity of pizzas from the form
    var inputtedQuantity = parseInt($("input#quantity").val());

    //Get the index value of the pizza size from the form and assign inputtedSize to that corresponding pizzaSize object
    var inputtedSizeIndex = $("#pizza-size").val();
    var inputtedSize = pizzaSizes[inputtedSizeIndex];

    //Create an empty array of inputtedToppings, and push each selected topping object into that array
    var inputtedToppings = [];
    $("#toppings option:selected").each(function(i, selected) {
      var currentIndex = $(selected).val();
      inputtedToppings[i] = toppingsList[currentIndex];
    });

    //Create the new pizza order using inputted parameters
    var newPizza = new Pizza(inputtedQuantity, inputtedSize, inputtedToppings);

    //Calculate the order cost using prototype price and show the result to the user
    var totalCost = newPizza.price();
    $(".total-cost").text(totalCost);
    $("#result").show();
    event.preventDefault();
  });
});
