// Get DOM elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if(inputBox === "") {
    alert("Please enter a task");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    // create delete button
    let deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = "\u00d7";
    li.appendChild(deleteBtn);
  }
  inputBox.value = "";
  saveData();
}


listContainer.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
    saveData();
  } 
  else if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove();
    saveData();
  }

}, false);

// function to save the data
function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

// function to show the data
function showData(){
  listContainer.innerHTML = localStorage.getItem("data");
}

// Event listener for adding tasks when Enter is pressed in the input box
inputBox.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

// Show data when the page loads
showData();
