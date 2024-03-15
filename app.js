// Importing required modules
const express = require('express');
const path = require('path');

// Initializing Express app
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set up static files directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index', { route: 'Root', message: "Welcome to my Express app!" });
});

app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.render('index', { route: 'User', message: `User ID: ${userId}` });
});

app.use((req, res) => {
  res.status(404).render('index', { route: '404', message: "404 - Page not found" });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// const express = require('express')
// const app = express()
// const port = 4000

// app.get('/', (req, res) => {
// console.log("getting into home")
//   res.send('Welcome to my Express app!')
// })

// app.get('/user/:id/', (req, res) => {
//     const userId = req.params.id;
//     res.send(`User ID: ${userId}`)
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// app.use((req, res) => {
//     res.status(404).send("404 - Page not found");
//   });