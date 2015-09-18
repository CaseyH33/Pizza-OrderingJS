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
