const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");
const message = document.querySelector("#form-message");
const emptyState = document.querySelector("#empty-state");

const createIcon = (path) => {
  const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  icon.setAttribute("viewBox", "0 0 24 24");
  icon.setAttribute("width", "18");
  icon.setAttribute("height", "18");
  icon.setAttribute("aria-hidden", "true");

  const line = document.createElementNS("http://www.w3.org/2000/svg", "path");
  line.setAttribute("d", path);
  line.setAttribute("fill", "none");
  line.setAttribute("stroke", "currentColor");
  line.setAttribute("stroke-width", "2.2");
  line.setAttribute("stroke-linecap", "round");
  line.setAttribute("stroke-linejoin", "round");
  icon.append(line);

  return icon;
};

const updateEmptyState = () => {
  emptyState.classList.toggle("is-hidden", list.children.length > 0);
};

const clearError = () => {
  input.classList.remove("is-invalid");
  message.textContent = "";
};

const showError = (text) => {
  input.classList.add("is-invalid");
  message.textContent = text;
};

const addTask = (text) => {
  const item = document.createElement("li");
  item.className = "todo-item";

  const completeButton = document.createElement("button");
  completeButton.className = "complete-button";
  completeButton.type = "button";
  completeButton.setAttribute("aria-label", "标记任务完成");
  completeButton.append(createIcon("M5 12.5l4.2 4.2L19 6.8"));

  const taskText = document.createElement("span");
  taskText.className = "todo-text";
  taskText.textContent = text;

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.type = "button";
  deleteButton.setAttribute("aria-label", "删除任务");
  deleteButton.append(createIcon("M6 6l12 12M18 6L6 18"));

  completeButton.addEventListener("click", () => {
    const isComplete = item.classList.toggle("is-complete");
    completeButton.setAttribute("aria-label", isComplete ? "标记任务未完成" : "标记任务完成");
  });

  deleteButton.addEventListener("click", () => {
    item.remove();
    updateEmptyState();
  });

  item.append(completeButton, taskText, deleteButton);
  list.append(item);
  updateEmptyState();
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = input.value.trim();
  if (!text) {
    showError("请输入任务内容。");
    input.focus();
    return;
  }

  addTask(text);
  input.value = "";
  clearError();
  input.focus();
});

input.addEventListener("input", clearError);

updateEmptyState();
