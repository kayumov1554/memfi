function javob() {
  const javoblar = +prompt("1-masala-javobi");

  switch (javoblar) {
    case 12:
      alert("tog'ri javob");
      break;
    default:
      alert("javobingiz xato");
  }
  const javoblar2 = +prompt("2-masala-javobi");
  switch (javoblar2) {
    case 16:
      alert("tog'ri javob");
      break;
    default:
      alert("javobingiz xato");
  }
  const javoblar3 = +prompt("3-masala-javobi");
  switch (javoblar3) {
    case 22:
      alert("tog'ri javob");
      break;
    default:
      alert("javobingiz xato");
  }
  const javoblar4 = +prompt("4-masala-javobi");
  switch (javoblar4) {
    case 55:
      alert("tog'ri javob");
      break;
    default:
      alert("javobingiz xato");
  }
  const javoblar5 = +prompt("5-masala-javobi");
  switch (javoblar5) {
    case 250:
      alert("tog'ri javob");
      break;
    default:
      alert("javobingiz xato");
  }
  if (
    javoblar == 12 &&
    javoblar2 == 16 &&
    javoblar3 == 22 &&
    javoblar4 == 55 &&
    javoblar5 == 250
  ) {
    alert("tabriklaymiz siz imithondan otdingiz");
  } else if (
    javoblar !== 12 &&
    javoblar2 == 16 &&
    javoblar3 == 22 &&
    javoblar4 == 55 &&
    javoblar5 == 250
  ) {
    alert("1 javobingizda xatolik bor tekshring");
  } else if (
    javoblar == 12 &&
    javoblar2 !== 16 &&
    javoblar3 == 22 &&
    javoblar4 == 55 &&
    javoblar5 == 250
  ) {
    alert("2 javobingizda xatolik bor tekshring");
  } else if (
    javoblar == 12 &&
    javoblar2 == 16 &&
    javoblar3 !== 22 &&
    javoblar4 == 55 &&
    javoblar5 == 250
  ) {
    alert("3 javobingizda xatolik bor tekshring");
  } else if (
    javoblar == 12 &&
    javoblar2 == 16 &&
    javoblar3 == 22 &&
    javoblar4 !== 55 &&
    javoblar5 == 250
  ) {
    alert("4 javobingizda xatolik bor tekshring");
  } else if (
    javoblar == 12 &&
    javoblar2 == 16 &&
    javoblar3 == 22 &&
    javoblar4 == 55 &&
    javoblar5 !== 250
  ) {
    alert("5 javobingizda xatolik bor tekshring va qaytadan yozing");
  } else if (
    javoblar !== 12 &&
    javoblar2 !== 16 &&
    javoblar3 !== 22 &&
    javoblar4 !== 55 &&
    javoblar5 !== 250
  ) {
    alert("siz imithondan ota olmadingiz javoblaringiz bari xato");
  }
}
new WOW().init();
