console.log("hello");
var addTask= document.getElementById('addTask');
var CategoryForm = document.getElementById('category_Form');
var DeleteTask = document.getElementById("deleteTask");

// Event listener for the "Add Task" button click
addTask.addEventListener('click', function(){
    CategoryForm.action = "/add-task";

    CategoryForm.submit(); // Submit form
})


// Event listener for the "Delete Task" button click
DeleteTask.addEventListener("click", function () {

    // Get all the checkboxes that are checked for deletion
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    if (checkboxes.length === 0) {
        alert("Please select at least one task to delete.");
        return;
    }

    //  all the values of the IDs and store them in an array format for convenient server-side handling
    const taskIdsToDelete = Array.from(checkboxes).map(checkbox => checkbox.value);

    // Create a hidden input field to send the selected task IDs
    const hiddenInput = document.createElement("input");
    hiddenInput.type = "hidden";
    hiddenInput.name = "taskIds";
    hiddenInput.value = taskIdsToDelete.join(',');

    // Append the hidden input field to the form
    CategoryForm.appendChild(hiddenInput);

    // Update the form's action attribute to route to the "delete-task" controller
    CategoryForm.action = "/delete-task"; // Replace with your delete controller's route

   
    CategoryForm.submit();
});


