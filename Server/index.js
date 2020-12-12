const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use('/uploads', express.static('uploads'));

//Utils
const uploadData = require('./routes/uploadData')
app.use('/api',uploadData);

//Student Routes
const studentRoute = require('./routes/student/studentUser.route')

app.use('/student', studentRoute)

//Faculty Routes
const facultyRoute = require('./routes/faculty/facultyUser.route')

app.use('/faculty', facultyRoute);



app.listen(PORT, () => console.log(`The Server has started on port ${PORT}.`));

// MONGO_URI='mongodb://localhost:27017/E-Learn'
// JWT_SECRET='6T\Ecj,-z@phUer4,M5?#<9_t46^#c'
mongoose
  .connect('mongodb://localhost:27017/E-Learn', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log('MongoDB started.');
  })
  .catch((err) => {
    console.log(err);
  });
