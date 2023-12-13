"use strict";
const expresss = require('express');
const router = expresss.Router();
const studentController = require('../controller/studentController');
// Define a route to add a new student
router.post('/students', studentController.addStudent);
router.get('/getstudents', studentController.getstudents);
router.get('/getstudent/:studentId', studentController.getstudentbyID);
module.exports = router;
