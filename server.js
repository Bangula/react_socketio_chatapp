const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

const db = require('./config/keys').mongoURI;
//Conect to MongoDB
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.log(err, 'Problem connecting to mongoDB!'))


//Apply middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//Import routes
const users = require('./routes/api/users');

app.use('/api/users', users);

app.listen(port, () => console.log(`Server is running on port: ${port}`));
