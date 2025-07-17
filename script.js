let storedValue = "";
let confirmedValue1 = "";
let confirmedValue2

const button1 = document.querySelector(".one");
button1.addEventListener("click", () => {
    storedValue += 1;
    console.log("storedValue is "+ storedValue);
    })

const button2 = document.querySelector(".two");
button2.addEventListener("click", () => {
    storedValue += 2;
    console.log("storedValue is "+ storedValue);
});

const button3 = document.querySelector(".three");
button3.addEventListener("click", () => {
    storedValue += 3;
    console.log("storedValue is "+ storedValue);
});

const buttonPlus = document.querySelector(".plus");
buttonPlus.addEventListener("click", () => {
    // if confirmed value is not "" then storedValue becomes confirmedValue2
    if ((confirmedValue1 !== "") && (storedValue !== "")) {
        confirmedValue2 = storedValue;
        console.log("Confirmed Value 2 is " + confirmedValue2);
    }
    else if (storedValue === "") {
        location.reload();
    } else {
        confirmedValue1 = storedValue;
        console.log("Confirmed Value 1 is " + confirmedValue1);
        // storedValue becomes = "" again
    }
    storedValue = "";
    console.log("storedValue is "+ storedValue);
});