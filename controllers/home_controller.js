//require db
const db = require('../config/mongoose');
//require task schema
const Task = require('../models/task');

//require express
const express = require('express');
const app = express();

//use form data sent by post
app.use(express.urlencoded({ extended: true }));

//to render the task list
module.exports.home = function(req,res){

    //find every task and put it in tasks var
    Task.find({},function(err,tasks){
        if(err){
            console.log('error in fetching tasks from db');
            return;
        }
        return res.render('home',{
            task_list: tasks
        });
    });
}

//to create a new task
module.exports.createTask = function(req,res){

    //create a new task based on received post request
    Task.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.due_date,
        completed: false
    },function(err,newTask){
        if(err){
            console.log('Error in creating a Task!');
            return;
        }
        console.log('******',newTask);
        return res.redirect('/');
    });
}

//to delete a task
module.exports.deleteTask = function(req,res){
    let id = req.params.id;

    //find the task in the db using id and delete
    Task.findByIdAndDelete(id,function(err){
        if(err){
            console.log('error in deleting an object from db');
            return;
        }
        return res.redirect('back');
    });
}

//to toggle a task
module.exports.toggleTask = function(req,res){
    let id = req.query.id;

    //find the task in the db using id and toggle
    Task.findById(id,function(err,task){
        if(err){
            console.log('error in toggling an object from db');
            return;
        }
        task.completed = !task.completed; 
        task.save();
        return res.redirect('back');
    });
}

//to delete the checked tasks
module.exports.delete = function(req,res){
    let ids = req.query;
    for (const id in ids) {
        Task.findByIdAndDelete(ids[id], function(err) {
        if (err) {
            console.log('Error in Deleting Contact from DB', err)
            return;
        }
        });
    }
    return;
}