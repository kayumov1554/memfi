const username = document.getElementById("username");
const password = document.getElementById("password");
const text = document.getElementById("text");

const data = localStorage.getItem("data")
  ? JSON.parse(localStorage.getItem("data"))
  : [];

function login() {
  if (username.value === "" && password.value === "") {
    text.textContent = "all fields are required";
    text.style.color = "red";
    setTimeout(() => {
      text.textContent = "";
    }, 2000);
    return;
  } else {
    const user = data.find(
      (item) => item.user === username.value && item.password === password.value
    );
    if (user) {
      text.textContent = "login successful";
      text.style.color = "green";
      setTimeout(() => {
        text.textContent = "";
      }, 2000);
      setInterval(() => {
        window.location.href = "/hero/hero.html";
      }, 1000);
    } else {
      text.textContent = "incorrect username or password";
      text.style.color = "red";
      setTimeout(() => {
        text.textContent = "";
      }, 2000);
    }
  }
}
