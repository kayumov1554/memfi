const LoginBTN = document.getElementById("Login");
const SignBTN = document.getElementById("SignIn");
const GetStarted = document.getElementById("GetStarted");

LoginBTN.addEventListener("click", () => {
  location.href = "/login/login.html";
});

SignBTN.addEventListener("click", () => {
  location.href = "/signin/sign.html";
});

GetStarted.addEventListener("click", () => {
  location.href = "/login/login.html";
});
