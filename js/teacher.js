document.addEventListener("DOMContentLoaded", () => {
  const students = [
    { name: "Carmen", evaluations: 6 },
    { name: "Marco", evaluations: 4 },
    { name: "Isidora", evaluations: 3 }
  ];

  const ul = document.getElementById("students");

  students.forEach(student => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${student.name} — Evaluaciones: ${student.evaluations}</span>
      <a href="progress.html" target="_blank">Ver progreso</a>
    `;
    ul.appendChild(li);
  });
});
