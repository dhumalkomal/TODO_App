// import require module express framework
const express = require('express');
// create new router instance
const router =  express.Router();

 // Import  home controller
const homeController = require('../controllers/home_controller');

console.log('router is loaded');

// routes handle home page
router.get('/', homeController.homePage);
// routes handle add and delete task 
router.post('/add-task', homeController.addTask);
router.post('/delete-task', homeController.deleteTask);

// Export the router 
module.exports = router;