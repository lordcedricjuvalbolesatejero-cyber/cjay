function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const error = document.getElementById('error');

    if (username === "estilla" && password === "072106") {
        error.innerHTML = "Login successful";
        error.style.color = "#155724";
        error.style.background = "#d4edda";
        error.style.borderLeft = "5px solid #198754";
        error.style.borderRight = "5px solid #198754";
        error.style.visibility = "visible";
    } else {
        error.innerHTML = "Invalid Credentials";
        error.style.color = "#721c24";
        error.style.background = "#f8d7da";
        error.style.borderLeft = "5px solid #dc3545";
        error.style.borderRight = "5px solid #dc3545";
        error.style.visibility = "visible";
    }
}