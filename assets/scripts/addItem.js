let submt = document.getElementById("submit");
let update = document.getElementById("update");
let storage = [];
let editID = JSON.parse(localStorage.getItem("editObjID"));
$("document").ready(() => {
  if (editID) {
    edit();
  }
});

let pid = function () {
  return Math.random().toString(36).substr(2, 4);
};
class Item {
  constructor(id, name, desc, category, quantity, threeDots, ...others) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.category = category;
    this.quantity = quantity;
    this.threeDots = threeDots;
    this.others = others;
  }
}
function createItem(id) {
  // const id = pid();
  const name = document.getElementById("name").value;
  const desc = document.getElementById("description").value;
  const cat = document.getElementById("category").value;
  const quantity = document.getElementById("quantity").value;
  const threeDots = "...";
  let invalidForm =
    name === "" || desc === "" || cat === "" || !quantity ? true : false;
  // console.log(cat);
  if (invalidForm) {
    alert("Kindly complete the form");
    return;
  } else {
    let nwItem = new Item(id, name, desc, cat, quantity, threeDots);

    return nwItem;
  }
}
// function invalidForm(formState) {}
function addToLocalStorage(id) {
  if (existingItems == null) {
    existingItems = [];
  }
  let newItem = createItem(id);
  if (newItem === "") {
    alert("empty");
  }
  existingItems.push(newItem);
  localStorage.setItem("items", JSON.stringify(existingItems));
  // localStorage.clear();
}

submt.addEventListener("click", () => {
  addToLocalStorage(pid());
  location.href = "../index.html";
});

// edit fn
function edit() {
  let id = JSON.parse(localStorage.getItem("objID"));
  // console.log(id);
  let name = document.getElementById("name");
  let desc = document.getElementById("description");
  let cat = document.getElementById("category");
  let quantity = document.getElementById("quantity");
  // let threeDots = "...";

  items.forEach((element) => {
    if (element.id === id) {
      name.value = element.name;
      desc.value = element.desc;
      cat.value = element.category;
      quantity.value = element.quantity;
    }
  });
  update.addEventListener("click", () => {
    for (i = 0; i < existingItems.length; i++) {
      if (existingItems[i].id == id) {
        // delete existingItems[i];
        existingItems.splice(i, 1);
      }
    }
    addToLocalStorage(id);
    localStorage.removeItem('editObjID')
    location.href = "../index.html";
  });
}
