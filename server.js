const express = require('express');
const path = require('path');

const app = express();
const PORT = 4000;

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle form submission
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    console.log("User Registered:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    res.send(`
        <h2>Registration Successful!</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
    `);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
