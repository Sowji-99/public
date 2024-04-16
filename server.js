const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080; // You can change the port if needed

app.get('/ITC505/lab-7/styles.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'ITC505', 'lab-7', 'styles.css'));
  });

  app.get('/ITC505/lab-7/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'ITC505', 'lab-7', 'script.js'));
  });
// Middleware to parse JSON and URL encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use('/ITC505/lab-7', express.static(path.join(__dirname, 'public')));

// Endpoint to handle POST requests from the form
app.post('/madlib', (req, res) => {
  const { noun, verb, adjective, locationInputValue, food } = req.body;

  // Create an array of Mad Libs
  const madLibsArr = [
    `${noun} ${verb} ${adjective} in ${locationInputValue} and ate ${food}.`,
    `While ${verb} ${adjective} in ${locationInputValue}, ${noun} had ${food}.`,
    `${noun} loves to travel to ${locationInputValue} and eat ${food} while ${verb} ${adjective}.`
  ];

  // Generate a random index
  const randomIndex = Math.floor(Math.random() * madLibsArr.length);

  // Send the Mad Lib story as a response
  res.send(madLibsArr[randomIndex]);
});

// Endpoint to serve the landing HTML file
app.get('/ITC505/lab-7/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'ITC505', 'lab-7', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
