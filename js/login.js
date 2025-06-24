function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if (email === "carmen@pukllay.com" && password === "12345") {
    window.location.href = "dashboard_student.html";
  } else if (email === "profesor@pukllay.com" && password === "12345") {
    window.location.href = "dashboard_teacher.html";
  } else {
    document.getElementById("error-msg").innerText = "Credenciales incorrectas.";
  }
}
