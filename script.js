let firstValue = "";
let addedValueConfirmed = "";
let subtractedValueConfirmed = "";
let dividedValueConfirmed = "";
let multipliedValueConfirmed = "";
let result;
const display1 = document.querySelector(".display1");
const display2 = document.querySelector(".display2");
const buttonOperators = document.querySelectorAll(".operator");
const buttonAll = document.querySelectorAll(".btn");
const buttonDot = document.querySelector(".dot");


// Getting values from number buttons
const buttonNums = document.querySelectorAll(".num");
buttonNums.forEach(button => {
button.addEventListener("click", () => {
    const value = button.textContent;
    firstValue += value;
    console.log("firstValue is " + firstValue);
    display1.textContent = firstValue;
    if ((display1.textContent.includes(".")) || (firstValue.includes("."))) {
        buttonDot.disabled = true;
    } else {
        buttonDot.disabled = false;
    }
  });
});

// Addition
const buttonPlus = document.querySelector(".plus");
buttonPlus.addEventListener("click", () => {
    if (firstValue === "") {
        alert("Enter a value before using plus");
    } 
    else { 
        addedValueConfirmed = firstValue;
    console.log("addedValueConfirmed is " + addedValueConfirmed);
    display2.textContent = addedValueConfirmed + "+";
    display1.textContent = "";
    firstValue = ""; 
    buttonOperators.forEach(button => button.disabled = true);
    buttonDot.disabled = false;
    }
})

// Subtraction
const buttonMinus = document.querySelector(".minus");
buttonMinus.addEventListener("click", () => {
    if (firstValue === "") {
        alert("Enter a value before using plus");
    } else {
        subtractedValueConfirmed = firstValue;
        console.log("subtractedValueConfirmed is " + subtractedValueConfirmed);
        display2.textContent = subtractedValueConfirmed + "-";
        display1.textContent = "";
        firstValue = ""; 
        buttonOperators.forEach(button => button.disabled = true);
        buttonDot.disabled = false;
        }
}
)

// Multiplication
const buttonMultiply = document.querySelector(".multiply");
buttonMultiply.addEventListener("click", () => {
    if (firstValue === "") {
        alert("Enter a value before using multiplication");
    } else {
        multipliedValueConfirmed = firstValue;
        console.log("multipliedValueConfirmed is " + multipliedValueConfirmed);
        display2.textContent = multipliedValueConfirmed + "×";
        display1.textContent = "";
        firstValue = "";
        buttonOperators.forEach(button => button.disabled = true);
        buttonDot.disabled = false;
    }
})

// Division
const buttonDivide = document.querySelector(".divide");
buttonDivide.addEventListener("click", () =>  {
    if (firstValue === "") {
        alert("Enter a value before using division");
    } else {
        dividedValueConfirmed = firstValue;
        console.log("dividedValueConfirmed is " + dividedValueConfirmed);
        display2.textContent = dividedValueConfirmed + "÷";
        display1.textContent = "";
        firstValue = "";
        buttonOperators.forEach(button => button.disabled = true);
        buttonDot.disabled = false;
    }
})

// Getting result
const buttonEqualize = document.querySelector(".equalize");
buttonEqualize.addEventListener("click", () => {
    if ((firstValue !== "") && (addedValueConfirmed !== "")) {
        let result = Number(firstValue) + Number(addedValueConfirmed);
        display1.textContent = "";
        display2.textContent += (firstValue + "=" + result)
        buttonAll.forEach(button => button.disabled = true);
    } else if ((firstValue !== "") && (subtractedValueConfirmed !== "")) {
        let result = Number(subtractedValueConfirmed) - Number(firstValue);
        display1.textContent = "";
        display2.textContent += (firstValue + "=" + result);
        buttonAll.forEach(button => button.disabled = true);
    }  else if ((firstValue !== "") && (dividedValueConfirmed !== "")) {
        let result = Number(dividedValueConfirmed) / Number(firstValue);
        if (Number.isInteger(result)) {
            display2.textContent += (firstValue + "=" + result);
        } else {
            let resultRounded = result.toFixed(4);
            display2.textContent += (firstValue + "=" + resultRounded);
        }
        display1.textContent = "";
        buttonAll.forEach(button => button.disabled = true);
    }  else if ((firstValue !== "") && (multipliedValueConfirmed !== "")) {
        let result = Number(multipliedValueConfirmed) * Number(firstValue);
        if (Number.isInteger(result)) {
            display2.textContent += (firstValue + "=" + result);
        } else {
            let resultRounded = result.toFixed(4);
            display2.textContent += (firstValue + "=" + resultRounded);
        }
        display1.textContent = "";
        buttonAll.forEach(button => button.disabled = true);
    }
    else {
        alert("Insufficient info for calculation");
    }
})

// Clear
const buttonReset = document.querySelector(".reset");
buttonReset.addEventListener("click", () => {
    location.reload();
})

// Backspace
const backspaceButton = document.querySelector(".backspace");
backspaceButton.addEventListener("click", () => {
  firstValue = firstValue.slice(0, -1);
  display1.textContent = firstValue;
  console.log("firstValue is " + firstValue);
  buttonDot.disabled = firstValue.includes(".");
});