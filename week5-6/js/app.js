const counter = document.querySelector("#counter");
const decreaseButton = document.querySelector("#decrease");
const increaseButton = document.querySelector("#increase");

let count = 0;

increaseButton.addEventListener("click", () => {
    count++;
    counter.textContent = count;
});

decreaseButton.addEventListener("click", () => {
    if (count > 0) {
        count--;
        counter.textContent = count;
    }
});