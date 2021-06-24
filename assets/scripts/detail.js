let objID = JSON.parse(localStorage.getItem("objID"));
if (objID) {
  let itemDetailId = JSON.parse(localStorage.getItem("objID"));

  let name = document.getElementById("pname");
  let desc = document.getElementById("pdesc");
  let cat = document.getElementById("pcat");
  let qty = document.getElementById("value");
  let head = document.getElementById("head");
  let items = JSON.parse(localStorage.getItem("items"));
  items.forEach((element) => {
    if (itemDetailId === element.id) {
      //   id.textContent = element.id;
      name.textContent = element.name;
      //   name.className = 'pname';
      desc.textContent =
        element.desc +
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          veniam maiores quas. Repudiandae dolor odit illo repellat vel`;
      head.textContent = "ITEMS";
      //   cat.textContent = element.category;
      qty.textContent = element.quantity;

      document.getElementById("edit").onclick = () => {
        localStorage.setItem("editObjID", JSON.stringify(element.id));
        // edit();
        location.href = "../../pages/addItem.html";
      };
    }
  });
  document.getElementById("delete").addEventListener("click", () => {
    for (i = 0; i < existingItems.length; i++) {
      console.log(objID);
      if (existingItems[i].id == objID) {
        existingItems.splice(i, 1);
        localStorage.setItem('items', JSON.stringify(existingItems));
        location.href = "../../index.html";
      } else {
        console.log(existingItems[i].id);
      }
    }
  });
}
