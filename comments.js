// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create comments array
const comments = [
    {name: 'John', message: 'Hello!'},
    {name: 'Jane', message: 'Hi!'},
    {name: 'Joe', message: 'Hey!'}
];

// Create route to get comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
}); 
