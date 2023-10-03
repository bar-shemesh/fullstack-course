var tasksArray = [];

let whenLoad = () => {
  tasksArray = loadData();
  createTable();
};

function addTask() {
  // fetching data from form fields
  var textData = document.getElementById("tasksT").value;
  var dateData = document.getElementById("taskD").value;
  var timeData = document.getElementById("taskTime").value;

  // creating a json object to represent a new task
  var data = {
    tasksT: textData,
    taskD: dateData,
    taskTime: timeData,
  };

  document.getElementById("tasksForm").reset();

  // push the json to the global array
  tasksArray.push(data);

  // add task to localStorage
  saveData();

  // draw the table
  createTable();
}

var createTable = () => {
  var container = document.getElementById("container");
  var table = "";

  for (var index = 0; index < tasksArray.length; index++) {
    table += `
    <li class="task">
       <div class="icon">
          <button onclick="removeProduct(${index})"class="btn"><i class="bi bi-x"></i></button>
        </div>
        <span class="taskText">${tasksArray[index].tasksT}</span>
        <div class="taskDate">${tasksArray[index].taskD}</div>
        <div class="taskTime">${tasksArray[index].taskTime}</div>
    </li>`;
  }
  container.innerHTML = table;
};

function removeProduct(index) {
  tasksArray.splice(index, 1);
  saveData();
  createTable();
}
function clearTable() {
  document.getElementById("tasksT").value = "";
  document.getElementById("taskD").value = "";
  document.getElementById("taskTime").value = "";
}

document.getElementById("clearTable").addEventListener("click", clearTable);

function clearTable() {
  document.getElementById("tasksT").value = "";
  document.getElementById("taskD").value = "";
  document.getElementById("taskTime").value = "";
}
document.getElementById("clearTable").addEventListener("click", clearTable);

var clearTasks = () => {
  document.getElementById("container").innerHTML = "";
  tasksArray = [];
  saveData();
};

const saveData = () => {
  localStorage.setItem("tasksData", JSON.stringify(tasksArray));
};

const loadData = () => {
  const tasks = localStorage.getItem("tasksData");
  if (tasks) {
    return JSON.parse(tasks);
  }
  return [];
};

function clearFrom() {
  document.getElementById("tasksT").value;
  document.getElementById("taskD").value;
  document.getElementById("taskTime").value;
}