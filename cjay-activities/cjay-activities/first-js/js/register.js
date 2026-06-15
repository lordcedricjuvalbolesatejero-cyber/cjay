function register() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const confirm_password = document.getElementById('confirm_password').value;
    const full_name = document.getElementById('full_name').value.trim();
    const error = document.getElementById('error');

    if (username === "" || password === "" || confirm_password === "" || full_name === "") {
        error.innerHTML = "Fill All";
        error.style.color = "maroon";
        error.style.background = "#fff3cd";
        error.style.borderLeft = "5px solid #b58900";
        error.style.borderRight = "5px solid #b58900";
        error.style.visibility = "visible";
    } else if (password !== confirm_password) {
        error.innerHTML = "Password Mismatch";
        error.style.color = "#800020";
        error.style.background = "#f5c2cf";
        error.style.borderLeft = "5px solid #dc3545";
        error.style.borderRight = "5px solid #dc3545";
        error.style.visibility = "visible";
    } else {
        error.innerHTML = "Registration Successful";
        error.style.color = "#155724";
        error.style.background = "#d1e7dd";
        error.style.borderLeft = "5px solid #198754";
        error.style.borderRight = "5px solid #198754";
        error.style.visibility = "visible";
    }
}