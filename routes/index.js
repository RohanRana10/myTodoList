//require express
const express = require('express');
//use express router
const router = express.Router();

//require the controller
const homeController = require('../controllers/home_controller');

//router for home page
router.get('/',homeController.home);

//router for create task
router.post('/create-task',homeController.createTask);

//router for delete task
router.get('/delete-task/:id',homeController.deleteTask);

//router for toggle task
router.get('/toggle-task',homeController.toggleTask);

//router for deleting checked tasks
router.get('/delete',homeController.delete);

console.log('Router loaded successfully!');
module.exports = router;