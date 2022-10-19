const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
var hpp = require('hpp');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const video = require('./routes/api/video');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(hpp());
app.use(helmet());
// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes7
app.use('/api/video', video);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
