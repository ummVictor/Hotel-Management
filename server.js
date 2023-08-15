const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();


// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Set the views directory and view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const routes = require('./routes/index');
app.use('/', routes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
