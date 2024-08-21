let taskFormE1=document.getElementById('task-form');
let taskInputE1=document.getElementById('task-el');
taskFormE1.addEventListener('submit',function(e){
    e.preventDefault();
    createTask();
});
//Create Task
let taskList=localStorage.getItem('task')?JSON.parse(localStorage.getItem('tasks')):[];
function createTask()
{
    let task=taskInputE1.value.trim();
    let taskobj={taskVal:task,isCompleted:false};
    taskList.unshift(taskobj);
    localStorage.setItem('task',JSON.stringify(taskList));
    console.log(taskList);
    taskInputE1.value='';
}
//Display tasks
function displayTasks(){
    if(taskList.length!=0){
        let eachTask=``;
        taskList.forEach((task)=>{
            eachTask+=`<li class="list-group-item list-group-item-dark mb-2">
            <span>${task.taskVal}</span>
            <button class="float-end ms-2 abc">
            <i class="bi bi-trash"></i>
            </button>
            <button class="float-end abc">
            <i class="bi bi-pen"></i>
            </button>
            </li>`
        });
        //console.log(eachTask);
        document.getElementById('task-list').innerHTML=eachTask;
    }    
}