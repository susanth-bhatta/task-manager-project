document.addEventListener('DOMContentLoaded', handlePTM);

function handlePTM() {
	/**
		1. Take reference of Input Field
		2. Take reference of add task Button
		3. Read the value entered by User in
		   the input field when Button is clicked
		4. Create <li> element with user entered task text
		5. Insert the <li> element into the list <ul> element.
	*/



	// Take reference of Input Field
	const taskInput = document.getElementById('task-input');
	// Take reference of Button
	const addTaskBtn = document.getElementById('add-task-btn');
	// Take Task list reference
	const taskList = document.getElementById('task-list');
	taskList.innerHTML=localStorage.getItem('taskData');

	// Read the value entered by User when Button is clicked
	addTaskBtn.addEventListener('click', function() {
		const taskText = taskInput.value;

		// Create a HTML List element with the taskText and insert into the UL element

		const newTaskItem = document.createElement('li');
		// <li class="task-item">Go grocery shopping <button class="delete-btn">Delete</button></li>
		newTaskItem.className = 'task-item';
		newTaskItem.innerHTML = taskText + ' <button class="delete-btn">Delete</button>'

		taskList.appendChild(newTaskItem);

		localStorage.setItem('taskData',taskList.innerHTML);

		taskInput.value = '';
	})


    taskList.addEventListener('click',function(complteList){
        const clickedElementsClasses=complteList.target.classList;
        if(clickedElementsClasses.contains('delete-btn')){
            //Delete the task item from UL (Task List)
            const taskItemToBeRemoved=complteList.target.parentElement;


        
            taskList.removeChild(taskItemToBeRemoved);
			localStorage.setItem('taskData',taskList.innerHTML);
        }
    });

}
