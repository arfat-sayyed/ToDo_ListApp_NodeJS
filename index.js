const { urlencoded } = require('express');
const express = require('express');
const path = require('path');
const port = 8000;
const db = require('./config/mongoose');
const ToDoTask = require('./models/tasks');
const Contact = require('./models/tasks');
const app = express();

app.use(express.urlencoded());
app.use(express.static('assets'));
// EJS Engine Set
app.set('view engine','ejs');
app.set('views', './views');

// This Is Variable Where Actual ToDo Task Is Stored For Storing Data Base
var TodoList = [
    {
        taskname:"",
        category:"",
        taskdate:""
    }
];

// Here Website Main Page Loads
app.get('/',function(req,res){

    ToDoTask.find({}, function(err, tasks){
        if(err){
            console.log("Finding Is Not East");
            return;
        }

    return res.render('home',{
        title: "ToDo List App",
        todo_tasks: tasks

    });
});
});


// Here New task is Created For Storing In DB
app.post('/create-task', function(req,res){
    // console.log(req.body.name);
    // console.log(req.body.phone);
    // ContactList.push({
    //     name: req.body.name,
    //     phone: req.body.phone
    // });

    ToDoTask.create({
        taskname: req.body.taskname,
        category: req.body.category,
        taskdate: req.body.taskdate
    }, function(err, newTask){
        if(err){
            console.log("Error In Creating Task");
            return;
        }
        console.log('*******', newTask);
        return res.redirect('back');
    }
    );

});

// Here Selected Task Is Deleted For Removing From DB
app.get('/delete-contact', function(req,res){

    let id = req.query.id;

    ToDoTask.findByIdAndDelete(id, function(err){
        if(err){
            console.log('Error In Deleting The Task');
            return;
        }

        return res.redirect('back');
    });

});


// Server Starts After This Code Execution

app.listen(port,function(err){
    if(err){
        console.log('Error In Starting Server - ',err);
        return;
    }

    console.log('Yes Server Is Running Perfectly');
});



