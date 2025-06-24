document.addEventListener("DOMContentLoaded", () => {
  const lessons = [
    {
      title: "Matemática",
      topic: "Fracciones",
      link: "lesson_fracciones.html"
    },
    {
      title: "Comunicación",
      topic: "Comprensión de lectura",
      link: "#"
    }
  ];

  const ul = document.getElementById("lessons");

  lessons.forEach(lesson => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = lesson.link;
    a.target = "_blank"; // Abre en nueva pestaña
    a.textContent = `${lesson.title} - ${lesson.topic}`;
    a.style.textDecoration = "none";
    a.style.color = "#2e7d32";

    li.appendChild(a);
    ul.appendChild(li);
  });
});
