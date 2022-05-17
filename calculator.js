let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector("input").value = string;
        } else if (e.target.innerHTML == "C") {
            string = "";
            document.querySelector("input").value = string;
        } else if (e.target.innerHTML == "R") {
            string = "";
            document.querySelector("input").value = string;
        } else if (e.target.innerHTML == "B") {
            string = "";
            document.querySelector("input").value = string;
        } else if (e.target.innerHTML == "B/W") {
            string = "";
            document.querySelector("input").value = string;
        } else {
            console.log(e.target.innerHTML);
            string = string + e.target.innerHTML;
            document.querySelector("input").value = string;
        }
    });
});

// Changing Background color of buttons

let bg_change_red = document.getElementById("bg-change-red");
console.log(bg_change_red);
bg_change_red.addEventListener("click", () => {
    buttons.forEach((button) => {
        button.style.backgroundColor = "red";
    });
});
let bg_change_blue = document.getElementById("bg-change-blue");
// console.log(bg_change_red);
bg_change_blue.addEventListener("click", () => {
    buttons.forEach((button) => {
        button.style.backgroundColor = "blue";
    });
});
let clear = document.getElementById("clear");
// console.log(bg_change_red);
clear.addEventListener("click", () => {
    buttons.forEach((button) => {
        button.style.backgroundColor = "white";
    });
});

// change the backgrond of calculator
// let calcContainer = document.getElementById("calc-container");
// let bgChange = document.getElementById("bg-change");
// let textColor = document.querySelector(".text-center");
// bgChange.addEventListener("click", () => {
//     console.log("you clicked b/w");
//     console.log(calcContainer);
//     calcContainer.style.backgroundColor = "black";
//     console.log(textColor);
//     textColor.style.color = "white";
// });

let calcContainer = document.getElementById("calc-container");
let bgChange = document.getElementById("bg-change");
let textColor = document.querySelector(".text-center");
var counter = 0;
bgChange.addEventListener("click", () => {
    counter++;
    if (counter == 1) {
        console.log("you clicked 1 b/w");
        console.log(calcContainer);
        calcContainer.style.backgroundColor = "black";
        console.log(textColor);
        textColor.style.color = "white";
        // return (counter = 0);
    } else if (counter == 2) {
        console.log("you clicked  2 b/w");
        console.log(calcContainer);
        calcContainer.style.backgroundColor = "white";
        console.log(textColor);
        textColor.style.color = "black";
        return (counter = 0);
    }
});

// changing background images
let changeBackImg = document.getElementById("user-btn");
let bgCounter = 0;
let imageArray = [
    "./img/calc1.jpg",
    "./img/calc2.jpg",
    "./img/calc3.jpg",
    "./img/calc2.jpg",
    "./img/calc1.jpg",
];
let bodyBack = document.getElementById("body-back");

function changeCounter() {
    bgCounter++;
    bodyBack.style.background = "url" + "(" + imageArray[bgCounter] + ")";
    if (bgCounter == 4) {
        bgCounter = 0;
    }
}
changeBackImg.addEventListener("click", changeCounter);

// const seven = document.getElementById("seven");
// console.log(seven);
// seven.addEventListener("click", () => {
//     window.alert(`you clicked on number ${seven.innerHTML}`);
// });