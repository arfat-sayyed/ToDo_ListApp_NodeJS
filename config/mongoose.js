const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo_task_db');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error Connecting To DB Of MONGO'));

db.once('open', function(){
    console.log('Success DB');
});