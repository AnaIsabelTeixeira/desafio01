console.log(
  "Welcome to my game! To play, press the PLAY key and try not to get hanged!"
);
let i;
i = 0;

function Hangman() {
  let letter;
  let x = document.getElementsByClassName("hangmanpart");
  let letterChoice = prompt("Pick a letter!", "Any letter, just do it wisely.");

  letter = {
    name: "playerinput",
    answer: letterChoice,
  };

  if (letter.answer == "D") {
    document.getElementById("letterD").innerText = "D";
  } else if (letter.answer == "d") {
    document.getElementById("letterD").innerText = "D";
  } else if (letter.answer == "A") {
    document.getElementById("letterA").innerText = "A";
  } else if (letter.answer == "a") {
    document.getElementById("letterA").innerText = "A";
  } else if (letter.answer == "R") {
    document.getElementById("letterR").innerText = "R";
  } else if (letter.answer == "r") {
    document.getElementById("letterR").innerText = "R";
  } else if (letter.answer == "K") {
    document.getElementById("letterK").innerText = "K";
  } else if (letter.answer == "k") {
    document.getElementById("letterK").innerText = "K";
  } else if (letter.answer == "B") {
    document.getElementById("letterB").innerText = "B";
  } else if (letter.answer == "b") {
    document.getElementById("letterB").innerText = "B";
  } else if (letter.answer == "L") {
    document.getElementById("letterL").innerText = "L";
  } else if (letter.answer == "l") {
    document.getElementById("letterL").innerText = "L";
  } else if (letter.answer == "U") {
    document.getElementById("letterU").innerText = "U";
  } else if (letter.answer == "u") {
    document.getElementById("letterU").innerText = "U";
  } else if (letter.answer == "E") {
    document.getElementById("letterE").innerText = "E";
  } else if (letter.answer == "e") {
    document.getElementById("letterE").innerText = "E";
  } else {
    x[i].style.visibility = "visible";
    i++;
  }
}
