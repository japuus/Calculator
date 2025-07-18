let firstValue = "";
let firstValueConfirmed = "";
const display = document.querySelector(".display");
const display2 = document.querySelector(".display2");
const buttonOperators = document.querySelectorAll(".operator");

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

const buttonPlus = document.querySelector(".plus");
buttonPlus.addEventListener("click", () => {
    if (firstValue === "") {
        alert("Enter a value before using plus");
    } 
    else { firstValueConfirmed = firstValue;
    console.log("firstValueConfirmed is " + firstValueConfirmed);
    display2.textContent = firstValue + "+";
    display.textContent = "";
    firstValue = ""; 
    buttonOperators.forEach(button => button.disabled = true);
    }
})

const buttonMinus = document.querySelector(".minus");
buttonMinus.addEventListener("click", () => {
    if (firstValue === "") {
        alert("Enter a value before using plus");
    } else { firstValueConfirmed = firstValue;
        console.log("firstValueConfirmed is " + firstValueConfirmed);
        display2.textContent = firstValue + "-";
        display.textContent = "";
        firstValue = ""; 
        buttonOperators.forEach(button => button.disabled = true);
        }
}
)

const buttonEqualize = document.querySelector(".equalize");
buttonEqualize.addEventListener("click", () => {
    if ((firstValue !== "") && (firstValueConfirmed !== "")) {
        let result = Number(firstValue) + Number(firstValueConfirmed);
        alert("Result is " + result)
        location.reload();
    } else {
        alert("Insufficient info for calculation");
    }
})