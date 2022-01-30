var taskInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0];
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); 
var completedTasksHolder = document.getElementById("completed-tasks");

function createNewTaskElement(taskString) {
	var listItem = document.createElement("li");
    var checkBox = document.createElement("input");
	var label = document.createElement("label");
	var editInput = document.createElement("input");
	var editButton = document.createElement("button");
	var deleteButton = document.createElement("button");

	checkBox.type = "checkbox";
	editInput.type = "text";

	editButton.innerText = "Edit";
	editButton.className = "edit";
	deleteButton.innerText = "Delete";
	deleteButton.className = "delete";

	label.innerText = taskString;

	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);

	return listItem;
}

function addTask() {
	console.log("Add task...");
	var listItem = createNewTaskElement(taskInput.value);
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);

	taskInput.value = "";
}

  function editTask() {
	console.log("Edit task...");

	var listItem = this.parentNode;

	var editInput = listItem.querySelector("input[type=text");
	var label = listItem.querySelector("label");

	var containsClass = listItem.classList.contains("editMode");

		if (containsClass) {
		label.innerText = editInput.value;
	} else {
		editInput.value = label.innerText;
	}

	listItem.classList.toggle("editMode");

}
function deleteTask() {
	console.log("Delete task...");
	var listItem = this.parentNode;
	var ul = listItem.parentNode;

	ul.removeChild(listItem);
}


function taskCompleted() {
	console.log("Task complete...");
	var listItem = this.parentNode;
	completedTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskIncomplete);
}


function taskIncomplete() {
	console.log("Task incomplete...");
	var listItem = this.parentNode;
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);
}

function bindTaskEvents(taskListItem, checkBoxEventHandler) {
	console.log("Bind list item events");
	
	var checkBox = taskListItem.querySelector("input[type=checkbox]");
	var editButton = taskListItem.querySelector("button.edit");
	var deleteButton = taskListItem.querySelector("button.delete");

		editButton.onclick = editTask;

		deleteButton.onclick = deleteTask;

		checkBox.onchange = checkBoxEventHandler;
}
function bindTaskEvents(taskListItem, checkBoxEventHandler) {
	console.log("Bind list item events");

	var checkBox = taskListItem.querySelector("input[type=checkbox]");
	var editButton = taskListItem.querySelector("button.edit");
	var deleteButton = taskListItem.querySelector("button.delete");

		editButton.onclick = editTask;

		deleteButton.onclick = deleteTask;

		checkBox.onchange = checkBoxEventHandler;
}

addButton.addEventListener("click", addTask);

for (var i = 0; i < incompleteTasksHolder.children.length; i++) {
    
	bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

for (var i = 0; i < completedTasksHolder.children.length; i++) {
	
	bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}