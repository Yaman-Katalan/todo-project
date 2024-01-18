"use strict";

// User Name
let userName = prompt("Enter Your Name");

for (; true; ) {
  // To make sure the user doesn't enter an empty or null value.
  if (userName === null || userName === "")
    userName = prompt("Enter Your Name.");
  else break;
}

for (let i = 0; i < userName.length; i++) {
  //To make sure the user doesn't enter a number.
  if (isNaN(userName[i]) === false && userName[i] !== " ") {
    userName = prompt("Don't Include Numbers to Your Name");
    for (; true; ) {
      //To make sure the user doesn't enter an empty or null value.
      if (userName === null || userName === "")
        userName = prompt("Enter Your Name.");
      else break;
    }
    i = -1;
  }
}
// __________________________________
// Gender
let userGender = prompt("Enter Your Gender", "male or female");

if (userGender !== "male" && userGender !== "female") {
  for (; true; ) {
    userGender = prompt("you can either enter male or female");
    if (userGender === "male" || userGender === "female") break;
  }
}
// ______________________________
// Age
let userAge = prompt("Enter Your Age");
// // // // // // // // //
for (; true; ) {
  //To make sure the user doesn't enter an empty or null value.
  if (userAge === null || userAge === "") userAge = prompt("Enter Your Age");
  else break;
}

for (; true; ) {
  if (isNaN(userAge) === true) {
    // To make sure the user enters numbers ONLY.
    userAge = prompt("Enter Nums Only!");
    // // // // // // // // //
    for (; true; ) {
      //To make sure the user doesn't enter an empty or null value.
      if (userAge === null || userAge === "")
        userAge = prompt("Enter Your Age");
      else break;
    }
  } else if (parseInt(userAge) <= 0) {
    // To make sure the user doesn't enter zero or negative value.
    userAge = prompt("you entered an age less than or equal zero");
    // // // // // // // // //
    for (; true; ) {
      //To make sure the user doesn't enter an empty or null value.
      if (userAge === null || userAge === "")
        userAge = prompt("Enter Your Age");
      else break;
    }
  } else break;
}
// ____________________________________
// Conformation
let confirmation = confirm(
  "Click Ok to if you want to skip the welcoming message"
);

let x = "";
if (userGender === "male") x = "Mr";
if (userGender === "female") x = "Ms";

if (confirmation === false) {
  alert(`Welcome ${x} ${userName}, Your Age is ${userAge}.`);
}
