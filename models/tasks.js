const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    taskname:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    taskdate:{
        type: Date,
        required: true
    }
});

const ToDoTask = mongoose.model('ToDoTask', TaskSchema);

module.exports = ToDoTask;