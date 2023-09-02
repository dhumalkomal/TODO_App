const TodoList = require('../models/todo_list');

// function handle 
module.exports.homePage =async function(req, res){
    try{
        let listItem = await TodoList.find({})
        
        return res.render('homePage', {
            title:"TODO App",
            List : listItem
        });

    }catch(err){
        // Error in fetching the data
        console.log("Error", err);
        return res.redirect('back');

    }
}

// function handle add task
module.exports.addTask = async function(req, res){
    console.log("Added the task");

    try{
        let newTask = await TodoList.create({
            description: req.body.description,
            category:req.body.catgy,
            dueDate:req.body.due_Date
        });

        console.log("Successfully Added the task");
        return res.redirect('back')

    }catch(err){
        console.log("Error in Adding task", err);
        return res.redirect("back");

    }
}



//  function to handle deleting tasks
module.exports.deleteTask = async function (req, res) {
    console.log('Deleting tasks');

    const taskIdsToDelete = req.body.taskIds.split(','); // Array of selected task IDs to delete

    try {
        // Loop through selected task IDs and delete each task
        
        for (let i of taskIdsToDelete) {
            await TodoList.findByIdAndDelete(i); // Delete task by ID
        }
        console.log('Tasks removed successfully');
        return res.redirect('back'); 

    } catch (error) {
        console.log('Error in deleting task from database : ', error);
        return res.redirect('back'); 
    }
}