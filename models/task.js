//require mongoose
const mongoose = require('mongoose');

//created task schema
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date
    },
    completed: {
        type: Boolean
    }
});

//modelled and exported the schema
const Task = mongoose.model('Task',taskSchema);
module.exports = Task;