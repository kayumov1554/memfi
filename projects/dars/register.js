const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const text = document.getElementById("text");
const checking = document.getElementById("checking");
checking.style.display = "none";
const data = localStorage.getItem("data")
  ? JSON.parse(localStorage.getItem("data"))
  : [];

function signUp() {
  if (name.value === "" || email.value === "" || password.value === "") {
    checking.style.display = "flex";
    setTimeout(() => {
      text.textContent = "Please enter all fields";
      text.style.color = "red";
      checking.style.display = "none";
    }, 500);
    setTimeout(() => {
      text.textContent = "";
    }, 1100);
    return;
  } else {
    data.push({
      id: data.length + 1,
      name: name.value,
      email: email.value,
      password: password.value,
    });
    localStorage.setItem("data", JSON.stringify(data));
    checking.style.display = "flex";
    setTimeout(() => {
      text.textContent = "Registration successful";
      text.style.color = "green";
      checking.style.display = "none";
    }, 500);
    setTimeout(() => {
      text.textContent = "";
    }, 1100);
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1000);
  }
}
