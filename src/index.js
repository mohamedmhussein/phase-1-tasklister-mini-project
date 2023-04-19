document.addEventListener("DOMContentLoaded", () => {
  // your code here
const form = document.querySelector("form")
form.addEventListener('submit',(e) => {
  e.preventDefault()
  handleTask(e.target.new_task_description.value)
  form.reset()
})

function handleTask(task){
//Listing tasks
let element = document.createElement("li")
element.textContent = `${task}  `
document.getElementById("tasks").append(element)

// adding x buttons
let btn = document.createElement("button")
btn.textContent = "X"
element.appendChild(btn)

//Deleting tasks
btn.addEventListener('click', DeleteTasks)

}

function DeleteTasks(e){
e.target.parentNode.remove()

}

});
