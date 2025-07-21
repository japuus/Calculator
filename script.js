let firstValue = "";
let addedValueConfirmed = "";
let subtractedValueConfirmed = "";
let dividedValueConfirmed = "";
let multipliedValueConfirmed = "";
const display = document.querySelector(".display");
const display2 = document.querySelector(".display2");
const display3 = document.querySelector(".display3");
const buttonOperators = document.querySelectorAll(".operator");
const buttonAll = document.querySelectorAll(".btn");
const buttonNums = document.querySelectorAll(".num");
let result;

buttonNums.forEach(button => {
button.addEventListener("click", () => {
    const value = button.textContent;
    firstValue += value;
    console.log("firstValue is " + firstValue);
    display.textContent = firstValue;
  });
});

/*
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
    */

const buttonPlus = document.querySelector(".plus");
buttonPlus.addEventListener("click", () => {
    if (firstValue === "") {
        alert("Enter a value before using plus");
    } 
    else { 
        addedValueConfirmed = firstValue;
    console.log("addedValueConfirmed is " + addedValueConfirmed);
    display2.textContent = addedValueConfirmed + "+";
    display.textContent = "";
    firstValue = ""; 
    buttonOperators.forEach(button => button.disabled = true);
    }
})

// Vähennyslasku
const buttonMinus = document.querySelector(".minus");
buttonMinus.addEventListener("click", () => {
    if (firstValue === "") {
        alert("Enter a value before using plus");
    } else {
        subtractedValueConfirmed = firstValue;
        console.log("subtractedValueConfirmed is " + subtractedValueConfirmed);
        display2.textContent = subtractedValueConfirmed + "-";
        display.textContent = "";
        firstValue = ""; 
        buttonOperators.forEach(button => button.disabled = true);
        }
}
)

const buttonDivide = document.querySelector(".divide");
buttonDivide.addEventListener("click", () =>  {
    if (firstValue === "") {
        alert("Enter a value before using division");
    } else {
        dividedValueConfirmed = firstValue;
        console.log("dividedValueConfirmed is " + dividedValueConfirmed);
        display2.textContent = dividedValueConfirmed + "/";
        display.textContent = "";
        firstValue = "";
        buttonOperators.forEach(button => button.disabled = true);
    }
})

const buttonMultiply = document.querySelector(".multiply");
buttonMultiply.addEventListener("click", () => {
    if (firstValue === "") {
        alert("Enter a value before using multiplication");
    } else {
        multipliedValueConfirmed = firstValue;
        console.log("multipliedValueConfirmed is " + multipliedValueConfirmed);
        display2.textContent = multipliedValueConfirmed + "*";
        display.textContent = "";
        firstValue = "";
        buttonOperators.forEach(button => button.disabled = true);
    }
})

const buttonEqualize = document.querySelector(".equalize");
buttonEqualize.addEventListener("click", () => {
    if ((firstValue !== "") && (addedValueConfirmed !== "")) {
        let result = Number(firstValue) + Number(addedValueConfirmed);
        display.textContent = "";
        display2.textContent += (firstValue + "=" + result)
        buttonAll.forEach(button => button.disabled = true);
    } else if ((firstValue !== "") && (subtractedValueConfirmed !== "")) {
        let result = Number(subtractedValueConfirmed) - Number(firstValue);
        display.textContent = "";
        display2.textContent += (firstValue + "=" + result);
        buttonAll.forEach(button => button.disabled = true);
    }  else if ((firstValue !== "") && (dividedValueConfirmed !== "")) {
        let result = Number(dividedValueConfirmed) / Number(firstValue);
//      return Number.isInteger(result) ? result : parseFloat(result.toFixed(3));
        if (Number.isInteger(result)) {
            display2.textContent += (firstValue + "=" + result);
        } else {
            let resultRounded = result.toFixed(4);
            display2.textContent += (firstValue + "=" + resultRounded);
        }
        display.textContent = "";
//      display2.textContent += (firstValue + "=" + resultRounded);
        buttonAll.forEach(button => button.disabled = true);
    }  else if ((firstValue !== "") && (multipliedValueConfirmed !== "")) {
        let result = Number(multipliedValueConfirmed) * Number(firstValue);
        if (Number.isInteger(result)) {
            display2.textContent += (firstValue + "=" + result);
        } else {
            let resultRounded = result.toFixed(4);
            display2.textContent += (firstValue + "=" + resultRounded);
        }
        display.textContent = "";
        buttonAll.forEach(button => button.disabled = true);
    }
    else {
        alert("Insufficient info for calculation");
    }
})

const buttonReset = document.querySelector(".reset");
buttonReset.addEventListener("click", () => {
    location.reload();
})