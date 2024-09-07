const GetBtn = document.getElementById("Getbtn");
const right = document.getElementById("right");
const text = document.getElementById("text");
const SendMsg = document.getElementById("sendMsg");
const input = document.getElementById("input");
const container = document.getElementById("container");
right.style.display = "none";

GetBtn.addEventListener("click", () => {
  right.style.display = "flex";
});

const data = [
  {
    name: "tulki",
    message: "",
    img: "https://www.1zoom.ru/big2/436/293337-alexfas01.jpg",
  },
];

for (let i = 0; i < data.length; i++) {
  container.innerHTML = `
            <div class="card">
          <img
            src="${data[i].img}"
            alt=""
          />
          <h1>data${data[i].name}</h1>
          <i
            id="${data[i].message}"
            style="display: flex; flex-direction: column; text-align: start"
          ></i>
        </div>
                <form action="">
          <input type="text" placeholder="Message" id="input" />
          <button class="bx bx-send" type="button" id="sendMsg" onclick="Send(${[
            i,
          ]})"></button>
        </form>`;
}

function Send() {
  text.innerHTML = input.value;
  input.value = "";
}
