function updateDashboard() {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    const activities = JSON.parse(localStorage.getItem("activities")) || [];

    // Count employees by status
    let active = 0, permanent = 0, temporary = 0, separated = 0;
    employees.forEach(emp => {
        if (emp.status === "Active") active++;
        if (emp.status === "Permanent") permanent++;
        if (emp.status === "Temporary") temporary++;
        if (emp.status === "Separated") separated++;
    });

    // Update dashboard numbers
    const activeEl = document.getElementById("activeCount");
    const permanentEl = document.getElementById("permanentCount");
    const temporaryEl = document.getElementById("temporaryCount");
    const separatedEl = document.getElementById("separatedCount");

    if (activeEl) activeEl.innerText = active;
    if (permanentEl) permanentEl.innerText = permanent;
    if (temporaryEl) temporaryEl.innerText = temporary;
    if (separatedEl) separatedEl.innerText = separated;

    // Update recent activities (last 5)
    const tbody = document.getElementById("activityTable");
    if (tbody) {
        tbody.innerHTML = "";
        activities.slice(-5).reverse().forEach((act, i) => {
            tbody.innerHTML += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${act.action}</td>
                    <td>${act.name}</td>
                    <td>${act.date}</td>
                </tr>`;
        });
    }
}

// Initial load
document.addEventListener("DOMContentLoaded", () => {
    updateDashboard();

    // Optional: auto-refresh every 2 seconds so dashboard reflects changes instantly
    setInterval(updateDashboard, 2000);

    // Navbar highlight
    const path = window.location.pathname.split("/").pop();
    const navDashboard = document.getElementById("nav-dashboard");
    const navEmployees = document.getElementById("nav-employees");

    if (path === "dashboard.html" && navDashboard) {
        navDashboard.classList.add("active-link");
    }
    if (path === "employee_list.html" && navEmployees) {
        navEmployees.classList.add("active-link");
    }

    // Logout
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", e => {
            e.preventDefault();
            if (confirm("Are you sure you want to log out?")) {
                window.location.href = "login.html";
            }
        });
    }
});