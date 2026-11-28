const students = [
    { name: "Ana", score: 88, section: "3-A" },
    { name: "Ben", score: 92, section: "3-A" },
    { name: "Cara", score: 70, section: "3-B" },
    { name: "David", score: 85, section: "3-B" },
    { name: "Ella", score: 65, section: "3-A" }
];

function render(rows) {
    const list = document.querySelector("#list");

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
render(students);