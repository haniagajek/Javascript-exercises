//@ts-nocheck

let addTodoButton = document.getElementById("Addtodo");
let todocontainer = document.getElementById("to-do-container");
let inputField = document.getElementById("input-field");

function addItem() {
  if (inputField.value === "") {
    return;
  }

  const paragraph = document.createElement("p");
  paragraph.classList.add("textaddedstyle");
  paragraph.innerText = inputField.value;

  const container = document.createElement("div");
  container.classList.add("item");
  container.appendChild(paragraph);

  todocontainer.appendChild(container);

  inputField.value = "";

  container.addEventListener("mouseover", function() {
    container.classList.add("itemafter");
  });

  container.addEventListener("mouseout", function() {
    container.classList.remove("itemafter");
  });

  container.addEventListener("click", function() {
    todocontainer.removeChild(container);
  });
}

inputField.addEventListener("keypress", function(event) {
  if (event.code === "Enter") {
    addItem();
  }
});

addTodoButton.addEventListener("click", function() {
  addItem();
});
