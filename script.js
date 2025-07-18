let firstValue = "";
let firstValueConfirmed = "";
const display = document.querySelector(".display");
const display2 = document.querySelector(".display2");

let result;

const buttonOne = document.querySelector(".one");
buttonOne.addEventListener("click", () => {
    firstValue += 1;
    console.log("firstValue is " + firstValue);
    display.textContent = firstValue;
});

const buttonTwo = document.querySelector(".two");
buttonTwo.addEventListener("click", () => {
    firstValue += 2;
    console.log("firstValue is " + firstValue);
    display.textContent = firstValue;
})

const buttonThree = document.querySelector(".three");
buttonThree.addEventListener("click", () => {
    firstValue += 3;
    console.log("firstValue is " + firstValue);
    display.textContent = firstValue;
})

const buttonOperator = document.querySelector(".operator");
buttonOperator.addEventListener("click", () => {
    if (firstValue === "") {
        alert("Enter a value before using operator");
    } else if (firstValueConfirmed !== "") {
        alert("Addition is already selected, press equal sign or modify your number");
        console.log("firstValue is " + firstValue);
        console.log("firstValueConfirmed is " + firstValueConfirmed);
    }
    else { firstValueConfirmed = firstValue;
    console.log("firstValueConfirmed is " + firstValueConfirmed);
    display2.textContent = firstValue + "+";
//  firstValue += "+";
    display.textContent = "";
    firstValue = ""; 
    }
})

const buttonEqualize = document.querySelector(".equalize");
buttonEqualize.addEventListener("click", () => {
    if ((firstValue !== "") && (firstValueConfirmed !== "")) {
        let firstValueNum = Number(firstValue);
        let firstValueNConfirmedum = Number(firstValueConfirmed);
        result = firstValueNum + firstValueNConfirmedum;
        console.log("result is " + result);

    } else {
        alert("Insufficient info for calculation");
    }
})