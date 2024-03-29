const new_task = document.querySelector('#new-task');
const add_task = document.querySelector('#add-task');
const task_list = document.querySelector('#task-list');
const remove_button = document.querySelector('.remove-element');

add_task.onclick = function()
{
    if(new_task.value.length > 0)
    {
        const val = new_task.value;
        const new_element = document.createElement('li');
        new_element.innerHTML = val;

        const delete_button = document.createElement('button');
        delete_button.textContent = 'Done';
        delete_button.classList.add('remove-element');

        new_element.append(delete_button);
        task_list.append(new_element);
        new_task.value = '';
    }

    else
    {
        alert('Enter values!');
    }
}

task_list.addEventListener('click', function(event)
{
    const clickedElement = event.target;

    if(clickedElement.classList.contains('remove-element'))
    {
        const taskElement = clickedElement.parentElement;
        taskElement.remove();
    }
});