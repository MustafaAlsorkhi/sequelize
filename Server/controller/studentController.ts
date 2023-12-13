const database = require("../model/db");


const Studentt = require('../model/studentModel');

// Your controller logic using the Student model

const addStudent = async (req:any, res:any) => {
    try {
      // Extract student data from the request body
      const { name, age, grade } = req.body;
      // Create a new student in the database


      const newStudent = await Studentt.create({ name, age, grade });
  
      // Send a success response with the created student
      res.status(201).json(newStudent);
    } catch (error) {
      // Handle errors and send an error response
      console.error('Error adding student:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } 
  }; 

  const getstudents = async (req:any, res:any) => {
    try {
      // Retrieve all students from the database
      const allStudents = await Studentt.findAll();
  
      // Send a success response with the retrieved students
      res.status(200).json(allStudents);
    } catch (error) {
      console.error('Error getting students:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


  const getstudentbyID = async (req:any, res:any) => {
    try {
      const studentId = req.params.studentId;
  
      // Retrieve a student by ID from the database
      const student = await Studentt.findByPk(studentId);
  
      // Check if the student with the given ID exists
      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }
  
      // Send a success response with the retrieved student
      res.status(200).json(student);
    } catch (error) {
      console.error('Error getting student by ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  module.exports = {
    addStudent,
    getstudents,
    getstudentbyID
  
  };