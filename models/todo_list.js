const mongoose =  require('mongoose');

// const todoListSchema = mongoose.Schema();

// schema for the 'List' collection
const todoListSchema = new mongoose.Schema({
    description : {
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    dueDate: {
        type: Date,
        required:true
    }
}, {
    timestamps:true // Automatically add 'createdAt' and 'updatedAt' fields
});

// // Create  'TodoList' model based on the schema
const TodoList = mongoose.model('TodoList', todoListSchema);

module.exports = TodoList;