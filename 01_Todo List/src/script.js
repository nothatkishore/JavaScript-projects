import { ref, set, get, push } from "firebase/database";
import { database } from "./firebase-config.js";

const form = document.querySelector(".box");
const task = document.querySelector("#sampleId");
const taskContainer = document.querySelector(".todo-container");



const createTask = async (path, data) => {
    try {

        const data_base = ref(database, path);
        const sampleData = await push(data_base, data);
        return sampleData.key;

    } catch (error) {

        console.log(error);

    }
}


const deleteTask = async (path, key) => {
    try {

        const data_base = ref(database, `${path}/${key}`);
        await set(data_base, null);
        console.log("Task deleted!");

    } catch (error) {
        console.log(error);
    }
}

const updateTask = async (path, key, data) => {
    try {

        const data_base = ref(database, `${path}/${key}`);
        await set(data_base, data);
        console.log("Data updated!");

    } catch (error) {

        console.log(error);

    }
}

const getTasks = async (path) => {
    try {

        const data_base = ref(database, path);
        const DataPoints = await get(data_base);
        
        if(DataPoints.exists())
        {
            const Tasks = DataPoints.val();
            const Sample = Tasks["task"];

            for(const key in Sample)
                renderTasks(key, Sample[key]);
        }

    } catch (error) {
        console.log(error);
    }
}

const renderTasks = (key, value) => {
    const taskBox = document.createElement('div');
    taskBox.className = "box";
    taskBox.style.flexDirection = "row";
    taskBox.dataset.key = key;

    const inputBox = document.createElement('input');
    inputBox.type = "text";
    inputBox.value = value;
    inputBox.className = "task"
    inputBox.style.flex = "1";
    inputBox.disabled = true;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";

    const editButton = document.createElement('button');
    editButton.textContent = "Edit";

    taskBox.appendChild(inputBox);
    taskBox.appendChild(deleteBtn);
    taskBox.appendChild(editButton);

    taskContainer.append(taskBox);


    deleteBtn.addEventListener('click', (event) => {
        event.preventDefault();
        deleteTask("/task", key);
        taskBox.remove();
    })

    editButton.addEventListener('click', (event) => {
        event.preventDefault();
        if (inputBox.disabled) {
            inputBox.disabled = false;
            editButton.textContent = "Save";
        }

        else {
            inputBox.disabled = true;
            editButton.textContent = "Edit";
            updateTask("/task", key, inputBox.value);
        }
    })
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (task.value === "") {
        alert("Enter Task and click submit!");
        return;
    }

    const key = await createTask("/task", task.value);
    renderTasks(key, task.value);
    task.value = "";
})

window.onload = () => {
    getTasks();
}