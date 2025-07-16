
function addTask()
{
     //Add task string in text field to list
    
    /**
   * Indicate your element type will be HTMLInputElement
   * @type HTMLInputElement
   */
    var taskTextElem = document.getElementById("taskInput");
    var taskText = taskTextElem.value;

    //store ref to unorderd list
    var uList = document.getElementById('todoList');

    var listItem = document.createElement("li");
    var spanItem = document.createElement("span");
    spanItem.textContent = taskText;
    listItem.appendChild(spanItem);
    var delButton = document.createElement("button");
    delButton.innerText = "Delete";
    var editButton = document.createElement("button");
    editButton.innerText = "Edit";
    listItem.appendChild(editButton);
    listItem.appendChild(delButton);
    uList.appendChild(listItem);
    taskTextElem.value = "";

}
