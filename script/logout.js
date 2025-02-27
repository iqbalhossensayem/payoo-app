
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("logout-btn").addEventListener("click", function (event) {
        event.preventDefault();

        const confirmLogout = confirm("Are you sure you want to logout?");
        if (confirmLogout) {
            window.location = "index.html";
        }
    });
});
