function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Kuch Likh To Sahi!");
        return;
    }
    
    var li = document.createElement("li");
    
    var taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function() {
        li.remove();
    };
    
    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);
    
    document.getElementById("taskList").appendChild(li);
    

    taskInput.value = "";
    taskInput.focus();
}

document.getElementById("taskInput").addEventListener("keypress", function(g) {
    if (g.key === 'Enter') {
        addTask();
    }
});