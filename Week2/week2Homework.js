let pizzaPlace = "Lora's Pizzeria";
let numberOfToppings = 8;

console.log(pizzaPlace);
console.log(typeof pizzaPlace);
console.log(numberOfToppings);
console.log(typeof numberOfToppings);

console.log(
  "The name of the pizza place is " +
    pizzaPlace +
    " and the number of toppings offered is " +
    numberOfToppings +
    "."
);

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}
