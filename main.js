//navabr javascript
window.onscroll = function () {
  myFunction();
};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
//javascript for random testimonials
//array to store quotes
var quotesArray = [
  "Great customer service and amazing toys from a family owned and managed company!",
  "Amazing recourses. Everything you need for a play room is right in one place.",
  "I loved this shop. They have a ton of awesome looking toys and games! The staff is very friendly and helped me find just what I was looking for.",
  "I have never been to this place EVER, until now!! However, the experience I just had left me feeling as though I was in this small town buying that perfect present that you could not find anywhere else!!I want to visit this toy store just because of this experience, and hope to someday, especially during the holidays!",
  "ALL THE TOYS. Even as an adult, I felt like a kid in a candy store. Upon entering you are immediately greeted by an employee. Everyone is super friendly and helpful.",
  "Little Bird Toys is fantastic, home-y shop and the staff is super helpful and amazing!",
  "The staff was so helpful. They gift wrapped the gift for me and it was so well done. Thanks for making my life easier, Little Bird Toys! Will definitely return for every toy gift I need"
];
//allows quotes to change when the screen is refreshed
var randomNumber = Math.floor(Math.random() * quotesArray.length);
document.getElementById("press-quote").textContent =
  "“" + quotesArray[randomNumber] + "”";

//javascript for mailing list
function clearName() {
  if (document.getElementById("nameField").value == "First and Last Name") {
    document.getElementById("nameField").value = "";
  }
}

function clearEmail() {
  if (document.getElementById("emailField").value == "JohnDoe@gmail.com") {
    document.getElementById("emailField").value = "";
  }
}
function resetName() {
  if (document.getElementById("nameField").value == "") {
    document.getElementById("nameField").value = "First and Last Name";
  }
}

function resetEmail() {
  if (document.getElementById("emailField").value == "") {
    document.getElementById("emailField").value = "JohnDoe@gmail.com";
  }
}

//accordian javascript
//defines dsiplay of accordians
document.getElementById("woodenToyAirplaneInfo").style.display = "none";
document.getElementById("woodenToyTrainInfo").style.display = "none";
document.getElementById("woodenBlockToySetInfo").style.display = "none";
document.getElementById("woodenToyCarInfo").style.display = "none";
//airplane accordion
function WoodenToyAirplane() {
  if (
    document.getElementById("woodenToyAirplaneInfo").style.display === "block"
  ) {
    document.getElementById("woodenToyAirplaneInfo").style.display = "none";
  } else if (
    document.getElementById("woodenToyAirplaneInfo").style.display === "none"
  ) {
    hidePanels();
    document.getElementById("woodenToyAirplaneInfo").style.display = "block";
  }
}
//function to open and close the toy train accordion on click
function WoodenToyTrain() {
  if (document.getElementById("woodenToyTrainInfo").style.display === "block") {
    document.getElementById("woodenToyTrainInfo").style.display = "none";
  } else if (
    document.getElementById("woodenToyTrainInfo").style.display === "none"
  ) {
    hidePanels();
    document.getElementById("woodenToyTrainInfo").style.display = "block";
  }
}
//block toy set accordion
function WoodenBlockToySet() {
  if (
    document.getElementById("woodenBlockToySetInfo").style.display === "block"
  ) {
    document.getElementById("woodenBlockToySetInfo").style.display = "none";
  } else if (
    document.getElementById("woodenBlockToySetInfo").style.display === "none"
  ) {
    hidePanels();
    document.getElementById("woodenBlockToySetInfo").style.display = "block";
  }
}
//toy car accordion
function WoodenToyCar() {
  if (document.getElementById("woodenToyCarInfo").style.display === "block") {
    document.getElementById("woodenToyCarInfo").style.display = "none";
  } else if (
    document.getElementById("woodenToyCarInfo").style.display === "none"
  ) {
    hidePanels();
    document.getElementById("woodenToyCarInfo").style.display = "block";
  }
}
//function to close all other panels when one is opened
function hidePanels() {
  document.getElementById("woodenToyAirplaneInfo").style.display = "none";
  document.getElementById("woodenToyTrainInfo").style.display = "none";
  document.getElementById("woodenBlockToySetInfo").style.display = "none";
  document.getElementById("woodenToyCarInfo").style.display = "none";
}
