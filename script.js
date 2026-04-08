//Wait for the DOM to load before running the script
document.addEventListener("DOMContentLoaded", function () {
	//Set reference variables based on HTML IDs
	const input = document.querySelector("#taskInput");
	const button = document.querySelector("#addBtn");
	const list = document.querySelector("#taskList");

	//Common function to add a task to the list, so we can use it for both button click and Enter key press
	function addTask() {
		const taskText = input.value.trim();

		const li = document.createElement("li");
		li.textContent = taskText;
		list.appendChild(li);

		input.value = "";
	}

	button.addEventListener("click", function () {
		addTask();
	});

	input.addEventListener("keydown", function (event) {
		if (event.key === "Enter") {
			addTask();
		}
	});
});
