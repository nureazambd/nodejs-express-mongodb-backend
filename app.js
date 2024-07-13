const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const items = require('./routes/items');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/items', items);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
