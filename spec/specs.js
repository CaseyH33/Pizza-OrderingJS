describe('Pizza', function() {
  it("creates a new pizza with the given specifications", function() {
    var quantity = 1;
    var pizzaSize = ["medium", 10];
    var toppings = ["cheese", "pepperoni"];
    var testPizza = new Pizza(quantity, pizzaSize, toppings);
    expect(testPizza.quantity).to.equal(1);
    expect(testPizza.pizzaSize).to.eql(["medium", 10]);
    expect(testPizza.toppings).to.eql(["cheese", "pepperoni"]);
  });

  it("calculates the cost of a pizza using the given specifications", function() {
    var testQuantity = 2;
    var testPizzaSize = new PizzaSize("medium", 10);
    var testTopping1 = new Topping("cheese", 1);
    var testTopping2 = new Topping("pepperoni", 3);
    var testPizza = new Pizza(testQuantity, testPizzaSize, [testTopping1, testTopping2]);
    expect(testPizza.price()).to.equal(28);
    });
});

describe('Topping', function() {
  it("creates a new topping with the given specifications", function() {
    var toppingItem = "cheese";
    var toppingCost = 1;
    var testTopping = new Topping(toppingItem, toppingCost);
    expect(testTopping.toppingItem).to.equal("cheese");
    expect(testTopping.cost).to.equal(1);
  });
});

describe('PizzaSize', function() {
  it("creates a new pizza size with the given specifications", function() {
    var sizeName = "medium";
    var sizeCost = 10;
    var testPizzaSize = new PizzaSize(sizeName, sizeCost);
    expect(testPizzaSize.sizeName).to.equal("medium");
    expect(testPizzaSize.cost).to.equal(10);
  });
})
