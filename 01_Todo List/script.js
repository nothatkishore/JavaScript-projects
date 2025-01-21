const form = document.querySelector(".box");
const task = document.querySelector("#sampleId");
const taskContainer = document.querySelector(".todo-container");

form.addEventListener('submit', (event) =>
{
    event.preventDefault();

    if(task.value === "")
    {
        alert("Enter Task and click submit!");
        return;
    }

    const taskBox = document.createElement('div');
    taskBox.className = "box";
    taskBox.style.flexDirection = "row";

    const inputBox = document.createElement('input');
    inputBox.type = "text";
    inputBox.value = task.value;
    inputBox.className = "task"
    inputBox.style.flex = "1";
    inputBox.disabled = true;

    task.value = "";

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";

    const editButton = document.createElement('button');
    editButton.textContent = "Edit";

    taskBox.appendChild(inputBox);
    taskBox.appendChild(deleteBtn);
    taskBox.appendChild(editButton);

    taskContainer.append(taskBox);


    deleteBtn.addEventListener('click', (event) =>
    {
        event.preventDefault();
        taskBox.remove();
    })

    editButton.addEventListener('click', (event) =>
    {
        event.preventDefault();
        if(inputBox.disabled)
        {
            inputBox.disabled = false;
            editButton.textContent = "Save";
        }

        else
        {
            inputBox.disabled = true;
            editButton.textContent = "Edit";
        }
    })
})