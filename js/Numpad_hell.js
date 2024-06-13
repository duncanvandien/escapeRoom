document.getElementById('code_input').readOnly = true;
let maxInputLength = 5;

function getRandomIntInclusive(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomNumber() {
   return getRandomIntInclusive(0, 9);
}

let RandomPassword1 = getRandomNumber();
let RandomPassword2 = getRandomNumber();
let RandomPassword3 = getRandomNumber();
let RandomPassword4 = getRandomNumber();
let RandomPassword5 = getRandomNumber();

let randomPassword = RandomPassword1 + "" + RandomPassword2 + "" + RandomPassword3 + "" + RandomPassword4 + "" + RandomPassword5;
console.log(RandomPassword1);
console.log(RandomPassword2);
console.log(RandomPassword3);
console.log(RandomPassword4);
console.log(RandomPassword5);
console.log(randomPassword);

const inputBox = document.querySelector(".number.code_input");

function checkPassword() {
   if (inputBox.value === randomPassword) {
      alert("Het werkt hoe dan?");
   }
}

// Add event listeners for number buttons
for (let i = 0; i <= 9; i++) {
   const numberButton = document.querySelector(`.number_${i}`);
   numberButton.addEventListener('click', function () {
      if (inputBox.value.length < maxInputLength) {
         inputBox.value += i;
      }
      if (inputBox.value.length === maxInputLength) {
         checkPassword();
      }
   });
}