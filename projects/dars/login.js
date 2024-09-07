const email = document.getElementById("email");
const password = document.getElementById("password");
const checking = document.getElementById("checking");
const text = document.getElementById("text");
checking.style.display = "none";

const data = localStorage.getItem("data")
  ? JSON.parse(localStorage.getItem("data"))
  : [];

function logIn() {
  if (email.value === "" || password.value === "") {
    text.textContent = "Please enter all fields";
    text.style.color = "red";
    setTimeout(() => {
      text.textContent = " ";
    }, 1000);
    return;
  } else {
    const user = data.find(
      (user) => user.email === email.value && user.password === password.value
    );
    if (user) {
      checking.style.display = "flex";
      setTimeout(() => {
        text.textContent = "Login successful";
        text.style.color = "green";
      }, 500);
      setTimeout(() => {
        checking.style.display = "none";
        text.textContent = "";
      }, 300);
      setInterval(() => {
        window.location.href = "https://ngrok.com";
      }, 1500);
    } else {
      text.textContent = "Invalid email or password";
      text.style.color = "red";
      setTimeout(() => {
        text.textContent = " ";
      }, 1500);
    }
  }
}
