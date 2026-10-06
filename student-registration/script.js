document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let message = document.getElementById("message");

    message.style.color = "red";

    if (name === "" || email === "" || mobile === "") {
        message.innerHTML = "Please fill all required fields.";
        return;
    }

    if (mobile.length != 10) {
        message.innerHTML = "Please enter a valid 10-digit mobile number.";
        return;
    }

    window.location.href = "success.html";
});