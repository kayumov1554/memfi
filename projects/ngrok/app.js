function checkName() {
  var name = prompt("Iltimos, ismingizni kiriting:");

  if (name) {
    showLoader();
    setTimeout(function () {
      window.location.href = "welcome.html"; // To'g'ri ism kiritilganda yo'naltiriladigan sahifa
    }, 2000); // 2 soniyadan so'ng yo'naltirish
  } else {
    document.getElementById("message").innerText =
      "Noto'g'ri ism kiritdingiz, iltimos yana urinib ko'ring.";
  }
}

function showLoader() {
  document.getElementById("loader").style.display = "block";
}
