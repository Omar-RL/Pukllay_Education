document.addEventListener("DOMContentLoaded", () => {
  // Simulación de datos que podrían venir de un backend o localStorage
  const progreso = 85; // Cambia este valor según el estudiante o la evaluación

  const circle = document.querySelector(".circle");
  const span = circle.querySelector("span");

  // Aplicar progreso como fondo dinámico
  circle.style.background = `conic-gradient(#4CAF50 ${progreso}%, #e0e0e0 0)`;
  span.textContent = `${progreso}%`;

  // Mensaje personalizado (opcional)
  const message = document.querySelector(".progress-container p:last-of-type");
  if (progreso >= 90) {
    message.textContent = "¡Excelente! Estás casi al 100% 🎯";
  } else if (progreso >= 70) {
    message.textContent = "¡Buen trabajo! Sigue practicando para llegar al 100%.";
  } else {
    message.textContent = "Aún puedes mejorar. ¡Sigue estudiando! 💪";
  }
});
