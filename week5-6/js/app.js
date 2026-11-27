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

const taskInput = document.querySelector("#taskInput");
const addButton = document.querySelector("#addButton");
const taskList = document.querySelector("#taskList");

addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const newTask = document.createElement("li");
        newTask.textContent = taskText;

        taskList.appendChild(newTask);

        taskInput.value = "";
    }
});

taskList.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.remove();
    }
});
