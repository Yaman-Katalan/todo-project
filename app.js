// User Name
let userName = prompt("Enter Your Name");
for (i = 0; i < userName.length; i++) {
  if (isNaN(userName[i]) === false && userName[i] !== " ") {
    userName = prompt("Don't Include Numbers to Your Name");
    i = -1;
  }
}

// Gender
let userGender = prompt("Enter Your Gender", "male or female"); //condition: male or female

if (userGender !== "male" && userGender !== "female") {
  for (; true; ) {
    userGender = prompt("you can either enter male or female");
    if (userGender === "male" || userGender === "female") break;
  }
}

// Age
let userAge = prompt("Enter Your Age");
let j;
for (let i = 0; i < userAge.length; i++) {
  if (userAge[0] === "-") {
    for (j = 1; j < userAge.length; j++) {
      if (isNaN(userAge[j]) === true) {
        userAge = prompt("Enter Numbers Only!");
        j = 0;
      }
    }
    if (j === userAge.length) break;
  }
  if (isNaN(userAge[i]) === true) {
    userAge = prompt("Enter Numbers Only!");
    i = -1;
  }
}

// Alert
if (parseInt(userAge) <= 0) {
  alert("you entered an age less than or equal zero");
}
// Conformation
let confirmation = confirm(
  "Click Ok to if you want to skip the welcoming message"
);

let x = "";
if (userGender === "male") x = "Mr";
if (userGender === "female") x = "Ms";

if (confirmation === false) {
  alert(
    `Welcome ${x} ${userName || "Unknown"}, Your Age is ${
      userAge || "Unknown"
    }.`
  );
}

// alert("Welcome Mr/Ms") //condition

// console.log(userName)
