const { log } = require("console");

// Create an array of pizzaToppings with at least four different toppings
let pizzaToppings = [
  "sausage",
  "onion",
  "olive",
  "mushroom",
  "pepperoni",
  "ham",
  "pineapple",
  "ground beef",
  "jalapeno"
];

// Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
// i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."
let pizzaToppingsList = "";
function greetCustomer() {
  let loopCounter = 1;
  for (let x of pizzaToppings) {
    if (loopCounter <= pizzaToppings.length) {
      //1 topping in list
      if (pizzaToppings.length === 1) {
        pizzaToppingsList += x;
      }
      //rest of toppings in list
      if (pizzaToppings.length > 1) {
        //Only 2 toppings in list
        if (pizzaToppings.length === 2 && loopCounter === 1) {
          pizzaToppingsList += x + " and ";
        }
        if (pizzaToppings.length === 2 && loopCounter === 2) {
          pizzaToppingsList += x;
        }
        //more than 2 toppings
        if (pizzaToppings.length > 2) {
          //all toppings in the middle
          if (pizzaToppings.length - 1 > loopCounter) {
            pizzaToppingsList += x + ", ";
          }
          //more than 2 toppings, at the second to last topping
          if (pizzaToppings.length - 1 === loopCounter) {
            pizzaToppingsList += x;
          }
          //more than 2 toppings, at the last topping
          if (pizzaToppings.length === loopCounter) {
            pizzaToppingsList += " and " + x;
          }
        }
      }
    }
    loopCounter++;
  }
  console.log(
    `Welcome to Pizza House, our toppings are: ${pizzaToppingsList}.`
  );
}
// greetCustomer();
// Create a getPizzaOrder function that
// has the parameters size, crust, and an indefinite amount of toppings as inputs
// prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
// outputs a list with the size, crust, and toppings
const size = "";
const crust = "";
const toppings = [];

let SelectedPizzaToppings = "";
let pizzaOrderList = [];
function getPizzaOrder(size, crust, ...toppings) {
  let loopCounter = 1;
  for (let x of toppings) {
    if (loopCounter < toppings.length) {
      SelectedPizzaToppings += x + ", ";
    }
    if (loopCounter >= toppings.length) {
      SelectedPizzaToppings += "and " + x;
    }
    loopCounter++;
  }
  console.log(
    `One ${size} ${crust} crust pizza with ${SelectedPizzaToppings} ... coming up!`
  );
  pizzaOrderList = [size, crust, SelectedPizzaToppings];
  return pizzaOrderList;
}

let pizzaOrder = getPizzaOrder(
  "large",
  "thin",
  "sausage",
  "onion",
  "mushroom",
  "green peppers"
);

// Create a preparePizza function that
// has an array as its parameter with three items: a size, a crust, and a list of toppings
// prints something like "...Cooking pizza..."
// outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings

let pizzaData = ["size", "crust", "toppings"];
let pizzaObj = {};
// I have a list with pizza toppings selections and a list with keys
// now I need to add the keys and values to an empty object
function preparePizza(pizzaOrder) {
  //assign keys and values to object
  for (let x = 0; x < pizzaData.length; x++) {
    pizzaObj[pizzaData[x]] = pizzaOrder[x];
  }

  console.log(`... Cooking pizza ... `);
  return pizzaObj;
}
let nowWePreparePizza = preparePizza(pizzaOrder);

// Create a servePizza function that
// has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
// outputs the same pizza Object that was passed in
function servePizza(nowWePreparePizza) {
  console.log(
    `Order up! Here's your ${nowWePreparePizza.size} ${nowWePreparePizza.crust} crust pizza with ${nowWePreparePizza.toppings} ... Enjoy!`
  );
  return `Order up! Here's your ${nowWePreparePizza.size} ${nowWePreparePizza.crust} crust pizza with ${nowWePreparePizza.toppings} ... Enjoy!`;
}

let nowWeServePizza = servePizza(nowWePreparePizza);
// Call each function and (starting with preparePizza) use the returned value from the previous function as its input
// greetCustomer();
// getPizzaOrder("large", "thin", pizzaToppings);
// preparePizza(pizzaOrder);
// servePizza(pizzaOrder);

// Add, commit, and push your JS file to your GitHub repo.

// Send your TA a link to your GitHub Homework repo when finished.
// NOTE: Please refrain from utilizing the Array.toString() method or inadvertently employing string coercion when constructing template literals. The primary objective of this exercise is to provide you with an opportunity to hone your skills in array traversal. Focus on utilizing while, for, and for...of loops to transform the array of toppings into the required output strings.

// The following is not an acceptable solution for Week 3 homework: let pizzaToppings = [" peperoni", " bacon"]; console.log(The pizza toppings are ${pizzaToppings}); After Week 3 this would be a perfectly acceptable solution but not for this assignment. Thank you.

// An example output for this assignment is:

// Welcome to The Pizza House, our toppings are: pepperoni, sausage, onions, peppers, One large thin crust pizza with sausage, onions, peppers, . Coming up! ...your pizza is cooking... Order up! Here's your large thin crust pizza with sausage, onions, peppers, . Enjoy!

// Bonus Challenge
// Figure out how to add "and" before the last topping in a list of toppings so when we list toppings it is more grammatically correct. You could create a listToppings function that stores the functionality, and call the function each time we list toppings in a function.
// i.e. "Our toppings are a, b, and c." instead of "Our toppings are a, b, c"
// In getPizzaOrder, if an order is placed with no toppings, print a slightly different message, like "One large thick crust cheese pizza coming up!" (Instead of "One large thick crust pizza with coming up!"). Alter servePizza in a similar way to fix its grammar when serving a "plain" cheese pizza.
// In getPizzaOrder, check the toppings the customer ordered against your list of available toppings. If they order a topping you don't offer, print a message that informs them you don't offer that topping and to order again.
