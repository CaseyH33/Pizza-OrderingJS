describe('Pizza', function() {
  it("creates a new pizza with the given specifications", function() {
    var quantity = 1;
    var pizzaSize = "medium";
    var toppings = ["cheese", "pepperoni"];
    var testPizza = new Pizza(quantity, pizzaSize, toppings);
    expect(testPizza.quantity).to.equal(1);
    expect(testPizza.pizzaSize).to.equal("medium");
    expect(testPizza.toppings).to.eql(["cheese", "pepperoni"]);
  });

  // it("calculates the cost of a pizza using the given specifications", function() {
  //   var toppingItem1 = "cheese";
  //   var toppingCost1 = 1;
  //   var toppingItem2 = "pepperoni";
  //   var toppingCost2 = 3;
  //   var pizzaSize = "medium";
  //   var toppings = ["cheese", "pepperoni"];
  //   var testPizza = new Pizza(quantity, pizzaSize, toppings);
  //   expect(testPizza.quantity).to.equal(1);
  //   expect(testPizza.pizzaSize).to.equal("medium");
  //   expect(testPizza.toppings).to.eql(["cheese", "pepperoni"]);
  //   });
});

describe('Topping', function() {
  it("creates a new topping with the given specifications", function() {
    var toppingItem = "cheese";
    var toppingCost = 1;
    var testTopping = new Topping(toppingItem, toppingCost);
    expect(testTopping.toppingItem).to.equal("cheese");
    expect(testTopping.toppingCost).to.equal(1);
  });
});

describe('PizzaSize', function() {
  it("creates a new pizza size with the given specifications", function() {
    var sizeName = "medium";
    var sizeCost = 10;
    var testPizzaSize = new PizzaSize(sizeName, sizeCost);
    expect(testPizzaSize.sizeName).to.equal("medium");
    expect(testPizzaSize.sizeCost).to.equal(10);
  });
})
