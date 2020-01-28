const DOMElements = (function() {
  const elements = {
    form: document.querySelector("#task-form"),
    taskList: document.querySelector(".collection"),
    clearButton: document.querySelector(".clear-tasks"),
    filter: document.querySelector("#filter"),
    taskInput: document.querySelector("#task")
  }
  return elements;
})();


const addTask = (e) => {
  e.preventDefault();
  if (DOMElements.taskInput.value === "") {
    alert("ADD TASK")
  }
  else {
    const li = document.createElement("li");
    li.className = "collection-item";

    li.appendChild(document.createTextNode(DOMElements.taskInput.value));
    const link = document.createElement("a");

    link.className = "delete-item secondary-content";
    link.innerHTML = `<i class="fa fa-remove"></i>`;

    li.appendChild(link);
    DOMElements.taskList.appendChild(li);
    DOMElements.taskInput.value = "";
  }
}

const removeTask = (e) => {
  if (e.target.parentElement.classList.contains("delete-item")) {
    const li = e.target.parentElement.parentElement;
    if (confirm("Are you sure?")) { 
      li.remove();
    }
  }
}

const clearTasks = () => {
  if (DOMElements.taskList.firstChild) {
    if (confirm("Are you sure? This will delete all your tasks")) {
      while(DOMElements.taskList.firstChild) {
          DOMElements.taskList.removeChild(DOMElements.taskList.firstChild)
      }
    }
  }
  else {
    alert("There is nothing to delete");
  }
  
}

const filterTasks = (e) => {
  const text = e.target.value.toLowerCase(); 
  document.querySelectorAll(".collection-item").forEach((currentTask) => {
    const item = currentTask.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) !== -1) {
      currentTask.style.display = "block";
    }
    else {
      currentTask.style.display = "none";
    }
  });
}

const loadEventListeners = () => {
  DOMElements.form.addEventListener("submit", addTask);
  DOMElements.taskList.addEventListener("click", removeTask);
  DOMElements.clearButton.addEventListener("click", clearTasks);
  DOMElements.filter.addEventListener("keyup", filterTasks);
}

loadEventListeners();
