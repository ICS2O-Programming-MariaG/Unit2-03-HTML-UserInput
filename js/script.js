
// Copyright (c) 2022 Maria Goemans All rights reserved
//
// Created by: Maria G
// Created on: March 2022
// This file contains the JS functions for index.html

function enterClicked() {
  //Declaring the name variable as the same as the inputted value
  let name = document.getElementById("first-name").value
  //Declaring the favFood variable as the same as the inputted value
  let favFood = document.getElementById("food-entered").value
  //Declaring the number variable as the same as the inputted value
  let number = document.getElementById("times-eaten").value
  //Adding text displaying user input below other elements on the webpage after the button is clicked
  document.getElementById('display').innerHTML = "Your name is " + name + ", your favourite food is " + favFood + " and you eat this food " + number + " times per month."
}