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
});

describe('Topping', function() {
  it("a new topping with the given specifications", function() {
    var toppingItem = "cheese";
    var toppingCost = 1;
    var testTopping = new Topping(toppingItem, toppingCost);
    expect(testTopping.toppingItem).to.equal("cheese");
    expect(testTopping.toppingCost).to.equal(1);
  });
});
