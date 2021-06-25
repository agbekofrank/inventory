let items = JSON.parse(localStorage.getItem("items"));
var existingItems = JSON.parse(localStorage.getItem("items"));

let total = 0;
let col;

let itemDetailId;

const container = document.querySelector(".container");

window.addEventListener("load", () => {
  displayItems(items);
  // localStorage.clear();
});

function displayItems(items) {
  for (let i = 0; i < items.length; i++) {
    let object = items[i];
    total += parseInt(object.quantity);
    let row = document.createElement("div");

    createRowChildren(object, row);
    row.className = "row";
    container.appendChild(row);
    row.onclick = () => {
      itemDetailId = object.id;
      localStorage.setItem("objID", JSON.stringify(object.id));
      location.href = "../pages/detail.html";
    };
    document.getElementById("total").textContent = total;
  }
}
function createRowChildren(object, element) {
  for (const prop in object) {
    col = document.createElement("div");
    let kolos = ["red", "orange", "green"];
    let colors;

    if (object[prop] === "...") {
      if (object.quantity == 0) {
        colors = kolos[0];
      } else if (object.quantity <= 21) {
        colors = kolos[1];
      } else {
        colors = kolos[2];
      }

      object[prop] = `<div class="${colors} label"></div>`;
    }
    col.innerHTML = `<div>${object[prop]}</div>`;

    col.className = "cols";
    element.appendChild(col);
  }
}

document.querySelector("#addBtn").addEventListener("click", addBtnHandler);

function addBtnHandler() {
  document.querySelector("#addBtn").addEventListener("click", () => {
    if (localStorage.getItem("editObjID")) {
      localStorage.removeItem("editObjID");
    }
    window.location.href = "../pages/addItem.html";
  });
}

function goBack() {
  window.history.back();
}
// document.getElementById('summary-card').addEventListener('click', () => {  location.href = "./pages/popup.html";});
