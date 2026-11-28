const students = [
    { name: "Ana", score: 88, section: "3-A" },
    { name: "Ben", score: 92, section: "3-A" },
    { name: "Cara", score: 70, section: "3-B" },
    { name: "David", score: 85, section: "3-B" },
    { name: "Ella", score: 65, section: "3-A" }
];

const list = document.querySelector("#list");
const form = document.querySelector("#add-form");
const message = document.querySelector("#message");

function render(rows) {
    list.textContent = "";

    rows.forEach(student => {
        const li = document.createElement("li");
        li.textContent = `${student.name} — ${student.score}%`;

        if (student.score < 75) {
            li.classList.add("failing");
        }

        list.appendChild(li);
    });
}

render(students);

document.querySelector("#showAll").addEventListener("click", () => {
    render(students);
});

document.querySelector("#showPassing").addEventListener("click", () => {
    const passingStudents = students.filter(student => student.score >= 75);
    render(passingStudents);
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const score = Number(form.score.value);

    if (!name) {
        message.textContent = "Name is required.";
        return;
    }

    if (form.score.value.trim() === "" || Number.isNaN(score) || score < 0 || score > 100) {
        message.textContent = "Enter a valid score between 0 and 100.";
        return;
    }

    students.push({ name, score, section: "3-A" });

    message.textContent = "Student added successfully.";

    render(students);
    form.reset();
});