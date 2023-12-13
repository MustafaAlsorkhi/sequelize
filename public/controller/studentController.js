"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const database = require("../model/db");
const Studentt = require('../model/studentModel');
// Your controller logic using the Student model
const addStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Extract student data from the request body
        const { name, age, grade } = req.body;
        // Create a new student in the database
        const newStudent = yield Studentt.create({ name, age, grade });
        // Send a success response with the created student
        res.status(201).json(newStudent);
    }
    catch (error) {
        // Handle errors and send an error response
        console.error('Error adding student:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
const getstudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Retrieve all students from the database
        const allStudents = yield Studentt.findAll();
        // Send a success response with the retrieved students
        res.status(200).json(allStudents);
    }
    catch (error) {
        console.error('Error getting students:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
const getstudentbyID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const studentId = req.params.studentId;
        // Retrieve a student by ID from the database
        const student = yield Studentt.findByPk(studentId);
        // Check if the student with the given ID exists
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }
        // Send a success response with the retrieved student
        res.status(200).json(student);
    }
    catch (error) {
        console.error('Error getting student by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
module.exports = {
    addStudent,
    getstudents,
    getstudentbyID
};
