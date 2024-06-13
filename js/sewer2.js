const buttons = document.querySelectorAll(".btn");
const redPoints = document.querySelectorAll(".red-point");
const door = document.querySelector('.door');
const fuzebox = document.querySelector('.fuzebox');
const popup = document.querySelector('.popup');
const puzzelclose = document.querySelector('.close');
const codepopup = document.querySelector('.code-popup');
const code = document.querySelector('.code');
const closecode = document.querySelector('.close-code');

let wrongCounter = 0;
let correctCounter = 0;
const correctOrder = [6,12,2,14];
let goodButton = correctOrder[0];

door.disabled = true;
buttons[correctOrder[correctCounter]].classList.add("correct");

for (let index = 0; index < buttons.length; index++) {
    const button = buttons[index];
    console.log(button);
    button.addEventListener("click", function(){
        if(button.classList.contains("correct")){

            button.classList.remove("correct");
            correctCounter++;
            if (correctCounter <= 3){
                addCorrect();
            }
        }else{
            alert("not correct");
            redPoints[wrongCounter].classList.add("filled");
            wrongCounter++;
            correctCounter = 0
            button.classList.remove("correct");
            addCorrect();        }
        if(correctCounter == 4){
            door.disabled = false;
            alert('de deur is open');
        }        
            if(wrongCounter == 4){
                alert("je bent niet eens binnen, reset de pagina om opnieuw te beginnen.");
            }

    })
};


function addCorrect(){
    buttons[correctOrder[correctCounter]].classList.add("correct"); 
}

door.addEventListener('click', function () {
    window.location.href = 'strip2.html';
  });


fuzebox.addEventListener('click', function () {
  popup.style.display = 'block';
});

puzzelclose.addEventListener('click', function () {
  popup.style.display = 'none';
});

popup.style.display = 'none';
    

code.addEventListener('click', function () {
    codepopup.style.display = 'block';
  });
  
  closecode.addEventListener('click', function () {
    codepopup.style.display = 'none';
  });
  
  codepopup.style.display = 'none';


    