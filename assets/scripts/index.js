let items = JSON.parse(localStorage.getItem("items"));
var existingItems = JSON.parse(localStorage.getItem("items"));

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
    // console.log(object);
    let row = document.createElement("div");

    createRowChildren(object, row);
    row.className = "row";
    container.appendChild(row);
    row.onclick = () => {
      itemDetailId = object.id;
      localStorage.setItem("objID", JSON.stringify(object.id));
      location.href = "../pages/detail.html";
    };
  }
}
function createRowChildren(object, element) {
  for (const prop in object) {
    col = document.createElement("div");
    if (object[prop] === "...") {
      // console.log(object[prop]);
      col.innerHTML =
        '<div><i class="zmdi zmdi-more-vert zmdi-hc-2x"></i></div>';
    }
    col.innerHTML = `<div>${object[prop]}</div>`;

    col.className = "cols";
    element.appendChild(col);
  }
}

document.querySelector("#addBtn").addEventListener("click", addBtnHandler);

function addBtnHandler() {
  document.querySelector("#addBtn").addEventListener("click", () => {
    if(localStorage.getItem('editObjID')){
      localStorage.removeItem('editObjID');
    }
    window.location.href = "../pages/addItem.html";
  });
}

function goBack(){
  window.history.back();
};
