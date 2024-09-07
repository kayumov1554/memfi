const inputName = document.getElementById("inputName");
const inputAge = document.getElementById("inputAge");
const inputNumber = document.getElementById("inputNumber");
const addButton = document.getElementById("addButton");
const editButton = document.getElementById("editButton");
const deleteButton = document.getElementById("deleteButton");
const tbody = document.getElementById("tbody");
const error = document.getElementById("error");
const startButton = document.getElementById("startButton");
const right = document.getElementById("right");
const renameButton = document.getElementById("renameButton");
renameButton.style.display = "none";
right.style.display = "none";
let STUDENTid = 0;

function start() {
  right.style.display = "block";
}

function clearValues() {
  inputName.value = "";
  inputAge.value = "";
  inputNumber.value = "";
}

const data = [];

render();
function render() {
  tbody.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    tbody.innerHTML += `
        <tr>
        <td>${data[i].id}</td>
        <td>${data[i].name}</td>
        <td>${data[i].age}</td>
        <td>${data[i].number}</td>
        <td>
            <button type="button" onclick="edit(${i})" id="editButton">
                <img src="pencil.png" alt="" />
            </button>
            <button type="button" onclick="deleteRow(${i})" id="deleteButton">
                <img src="x-button.png" alt="" />
            </button>
        </td>
    </tr>
        `;
  }
}

function addStudent() {
  if (
    inputName.value === "" ||
    inputAge.value === "" ||
    inputNumber.value === ""
  ) {
    error.textContent = "All fields are required";
    error.style.color = "red";
    error.style.margin = "10px 0";
  } else if (inputAge.value < 18) {
    error.textContent = "This is University to study  18 year olds";
    error.style.color = "red";
    error.style.margin = "10px 0";
  } else {
    data.push({
      id: data.length + 1,
      name: inputName.value,
      age: inputAge.value,
      number: inputNumber.value,
    });
    error.textContent = "Successfully added";
    error.style.color = "green";
    error.style.margin = "10px 0";
    error.style.textAlign = "center";
    setTimeout(() => {
      error.textContent = "";
    }, 1000);
    render();
    clearValues();
  }
}

function edit(id) {
  STUDENTid = data[id].id;
  inputName.value = data[id].name;
  inputAge.value = data[id].age;
  inputNumber.value = data[id].number;
  addButton.style.display = "none";
  renameButton.style.display = "block";
}

function editStudent() {
  for (let i = 0; i < data.length; i++) {
    if (
      inputName.value === "" ||
      inputAge.value === "" ||
      inputNumber.value === ""
    ) {
      error.textContent = "All fields are required";
      error.style.color = "red";
      error.style.margin = "10px 0";
    } else {
      if (data[i].id === STUDENTid) {
        data[i].name = inputName.value;
        data[i].age = inputAge.value;
        data[i].number = inputNumber.value;
      }
    }
    error.textContent = "Successfully edited";
    error.style.color = "green";
    error.style.margin = "10px 0";
    error.style.textAlign = "center";
    setTimeout(() => {
      error.textContent = "";
    }, 500);
    break;
  }
  render();
  clearValues();
}

function deleteRow(id) {
  data.splice(id, 1);
  error.textContent = "Successfully deleted";
  error.style.color = "green";
  error.style.margin = "10px 0";
  error.style.textAlign = "center";
  setTimeout(() => {
    error.textContent = "";
  }, 500);
  render();
}
