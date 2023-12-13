const express = require('express');
const app = express();
const studentRoute = require('./routes/studentRoute');
const sequelize1 = require('./model/db'); // Adjust the path as needed
const studentModel = require('./model/studentModel');
// Use the studentRoute for /students routes
app.use(express.json());
app.use(studentRoute);

// Your other configurations and middleware go here

// Start the server
sequelize1.sync().then(() => {
  const PORT = 3008;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});