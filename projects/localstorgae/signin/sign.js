const user = document.getElementById("user");
const password = document.getElementById("password");
const text = document.getElementById("text");

const data = localStorage.getItem("data")
  ? JSON.parse(localStorage.getItem("data"))
  : [];

function register() {
  if (password.value.length < 8) {
    text.textContent = "password must be at least 8 characters";
    text.style.color = "red";
    setTimeout(() => {
      text.textContent = "";
    }, 2000);
  } else if (user.value && password.value) {
    data.push({
      id: data.length + 1,
      user: user.value,
      password: password.value,
    });
    localStorage.setItem("data", JSON.stringify(data));
    text.textContent = "Registration successful";
    text.style.color = "green";
    setTimeout(() => {
      text.textContent = "";
    }, 2000);
    user.value = "";
    password.value = "";
    setInterval(() => {
      window.location.href = "/login/login.html";
    }, 1000);
  } else {
    text.textContent = "all fields are required";
    text.style.color = "red";
    setTimeout(() => {
      text.textContent = "";
    }, 2000);
  }
}
