const students = [
    { id: 1, name: "Ana", score: 88, section: "3-A" },
    { id: 2, name: "Ben", score: 92, section: "3-A" },
    { id: 3, name: "Cara", score: 70, section: "3-B" },
    { id: 4, name: "David", score: 85, section: "3-B" },
    { id: 5, name: "Ella", score: 65, section: "3-A" }
];

let nextStudentId = 6;
let currentFilter = "all";

const list = document.querySelector("#list");
const form = document.querySelector("#add-form");
const message = document.querySelector("#message");

function render(rows) {
    list.textContent = "";

    rows.forEach(student => {
        const li = document.createElement("li");
        const name = document.createElement("span");
        const deleteButton = document.createElement("button");

        name.textContent = `${student.name} — ${student.score}%`;

        if (student.score < 75) {
            li.classList.add("failing");
        }

        deleteButton.type = "button";
        deleteButton.textContent = "Delete";
        deleteButton.dataset.id = student.id;

        li.append(name, deleteButton);
        list.appendChild(li);
    });
}

function renderCurrentList() {
    if (currentFilter === "passing") {
        render(students.filter(student => student.score >= 75));
    } else {
        render(students);
    }
}

renderCurrentList();

document.querySelector("#showAll").addEventListener("click", () => {
    currentFilter = "all";
    renderCurrentList();
});

document.querySelector("#showPassing").addEventListener("click", () => {
    currentFilter = "passing";
    renderCurrentList();
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = form.elements.namedItem("name");
    const scoreInput = form.elements.namedItem("score");

    const name = nameInput.value.trim();
    const score = Number(scoreInput.value);

    if (!name) {
        message.textContent = "Name is required.";
        return;
    }

    if (
        scoreInput.value.trim() === "" ||
        Number.isNaN(score) ||
        score < 0 ||
        score > 100
    ) {
        message.textContent = "Enter a valid score between 0 and 100.";
        return;
    }

    students.push({
        id: nextStudentId,
        name,
        score,
        section: "3-A"
    });

    nextStudentId++;

    message.textContent = "Student added successfully.";
    currentFilter = "all";
    renderCurrentList();
    form.reset();
});

list.addEventListener("click", (e) => {
    const deleteButton = e.target.closest("button[data-id]");

    if (!deleteButton) {
        return;
    }

    const studentId = Number(deleteButton.dataset.id);
    const studentIndex = students.findIndex(student => student.id === studentId);

    if (studentIndex !== -1) {
        students.splice(studentIndex, 1);
        renderCurrentList();
    }
});