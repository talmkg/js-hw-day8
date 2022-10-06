/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/
let positivenumbers = [1, 2, 3, 4, 5];
/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/
const tim = {
  name: "Tim",
  surname: "Afanasiev",
  email: "random@gmail.com",
  age: "18",
};
const secondVariable = tim;
console.log("\n", secondVariable);

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/
tim.drivingLicense = true;
console.log(tim);

/* EXERCISE 4
 Remove from the previously created object the age property.
*/
delete tim.age;
console.log(tim);
/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/
const akbar = {
  name: "Akbar",
  surname: "Meme",
  email: "random@hotmail.com",
  age: "70",
};
/*           PART 2          */
if (tim.email == akbar.email) {
  console.log("\nAkbar's and Tim's email are equal.");
} else {
  console.log("\nThese emails are different");
}

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/
const apples = 12;
const desk = 50;
const coffee = 4;
let totalprice = apples + desk + coffee;
console.log("Your total price is: " + totalprice);
if (totalprice >= 50) {
  console.log("\n You have earned free shipping!");
} else {
  console.log("\n Your delivery will cost 10$");
}
/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/
const car = 1200;
const pc = 400;
const speakers = 20;
let sum = car + pc + speakers;
let sumdeal = sum - sum * 0.2;
console.log("Your total price with BF deal is:" + " " + sumdeal);
if (sumdeal >= 50) {
  console.log("\n You have earned free shipping!");
} else {
  console.log(" Your delivery will cost 10$");
}
/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/
var auto0 = {
  CarID: "Mustang",
  Plate: "00000000",
};
var auto1 = {
  CarID: "Mazda",
  Plate: "00000001",
};
let auto2 = {
  CarID: "Mazeratti",
  Plate: "00000002",
};
let auto3 = {
  CarID: "Bugatti",
  Plate: "00000003",
};

let auto4 = {
  CarID: "Toyota",
  Plate: "00000004",
};
/*let auto2 = {
  CarID: "Mazda RX-7",
  Plate: "11111111",
};
var DiffLicensePlate = [];
var letters = "1234567890";
var licenseplateLength = 8;
for (var i = 0; i < 5; i++) {
  let licenseplate = "";
  for (var j = 0; j < licenseplateLength; j++) {
    licenseplate += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  DiffLicensePlate.push({
    CarID: "Ford Mustand 1964, " + i + " Edition",
    Plate: licenseplate,
  });
}
for (i = 0; i < 1; i++) {
  console.log(auto, DiffLicensePlate);
}*/

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/
carsForRent = [auto0, auto1, auto3, auto4];

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/
removedcars = carsForRent.shift();
removedcars = carsForRent.pop();
console.log("ex10");
console.log(carsForRent);
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/
/* I GUESS? */

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
  Create a new variable called totalCars and assign to it the total number of cars present in the carsForRent and carsForSale arrays.
*/
var carsForSale = [];
carsForSale[0] = "Toyota";
carsForSale[1] = "Suzuki";
carsForSale[2] = "Mercedes";
console.log("ex12 part 1:" + carsForSale.join());
var totalCars = carsForSale.concat(carsForRent); /*NOT WORKING:(*/
console.log("ex12 part 2:" + totalCars);
/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/
console.log("ex13");
for (var i = 0; i < 1; i++) {
  console.log(carsForSale);
}
