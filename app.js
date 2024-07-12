const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/items.js');
const uri = process.env.mongodbUri;
const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/items', items);

// Connect to MongoDB
const db = uri
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
