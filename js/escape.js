const compass = document.querySelector("img.compass");
const cirkel = document.querySelector("img.cirkel")

let degree = 0;
let forward = 0;
let positionX = 700;
let positionY = 280;

document.body.addEventListener("keydown", function(event){
    console.log(event.key);
    
    if (event.key == "ArrowLeft"){
        degree = degree + 90;
        compass.style.transform = `rotate(${degree}deg)`;
    } else {
    if (event.key == "ArrowRight")
        degree = degree - 90;
        compass.style.transform = `rotate(${degree}deg)`;
    }
    if (event.key == "Enter"){
        (degree = 0)
        up();
    } else {
    if (degree = 90){
        rightside();
    } 
    if (degree = 180){
        down();
    } 
    if (degree = 270){
        leftside();
    }     
  }
   
});

function up(){
    positionY = positionY - 5;
    cirkel.style.top = positionY + "px";
}
function rightside(){
    positionX = positionX + 5;
    cirkel.style.right = positionX + "px";
}
function down(){
    positionY = positionY + 5;
    cirkel.style.bottom = positionY + "px";
}
function leftside(){
    positionX = positionX - 5;
    cirkel.style.left = positionX + "px";
}


function rotate(){
    const id = setInterval(function(){
        degree = degree + 90;
        compass.style.transform = `rotate(${degree}deg)`;
    },250);
}
 