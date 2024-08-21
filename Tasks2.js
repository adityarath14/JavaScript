let taskFormE1 = document.getElementById('task-form');
let taskInputE1 = document.getElementById('task-el');

// Retrieve the tasks from localStorage or initialize an empty array
let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

// Listen for the submit event on the form
taskFormE1.addEventListener('submit', function(e) {
    e.preventDefault();
    createTask();
});

// Create Task
function createTask() {
    let task = taskInputE1.value.trim();
    if (task) { // Check if the input is not empty
        let taskobj = { taskVal: task, isCompleted: false };
        taskList.unshift(taskobj);
        localStorage.setItem('tasks', JSON.stringify(taskList)); // Use 'tasks' key
        displayTasks(); // Update the task list display
        taskInputE1.value = ''; // Clear the input field
    }
}

// Display tasks
function displayTasks() {
    if (taskList.length !== 0) {
        let eachTask = ``;
        taskList.forEach((task, index) => {
            eachTask += `<li class="list-group-item list-group-item-dark mb-2">
                <span>${task.taskVal}</span>
                <button class="float-end ms-2 abc">
                    <i class="bi bi-trash" onclick="deleteTask(${index})"></i>
                </button>
                <button class="float-end abc">
                    <i class="bi bi-pen" onclick="updateTask(${index})"></i>
                </button>
            </li>`;
        });
        document.getElementById('task-list').innerHTML = eachTask;
    }
}

// Delete Functionality
function deleteTask(index) {
    taskList.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(taskList));
    displayTasks();
}

// Update Functionality
function updateTask(index) {
    taskInputE1.value = taskList[index].taskVal;
    deleteTask(index); // Remove the old task before updating
}

// Initial call to display any tasks already in localStorage
displayTasks();