const toDoList = () => {
  let todoInput = document.querySelector(".todo-input");
  let todoButton = document.querySelector(".todo-button");
  let todoList = document.querySelector(".todo-list");

  todoButton.addEventListener("click", addTodo);
  todoList.addEventListener("click", deleteCheck);

  function addTodo(event) {
    event.preventDefault();

    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    let newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    let completedButton = document.createElement("button");
    completedButton.innerHTML = "<i> ✓ </i>";
    completedButton.classList.add("complite-btn");
    todoDiv.appendChild(completedButton);

    let trashButton = document.createElement("button");
    trashButton.innerHTML = "<i> x </i>";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);

    todoInput.value = "";
  }

  function deleteCheck(event) {
    let item = event.target;

    if (item.classList[0] === "trash-btn") {
      let todo = item.parentElement;
      todo.classList.add("fall");
      todo.addEventListener("transitionend", function () {
        todo.remove();
      });
    }

    if (item.classList[0] === "complite-btn") {
      let todo = item.parentElement;
      todo.classList.toggle("completed");
    }
  }
};

toDoList();
