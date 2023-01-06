require('dotenv').config();
const express = require('express');
const routes = require('./routes/routes');

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const mongoString = process.env.MONGODB_URI;
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const app = express();

app.use(express.json());


app.get("/", function (req, res) {

  res.send("home !!!");
});


app.get("/hello", function (req, res) {
  res.send("hello world !!!");
});

app.use('/api', routes)


app.listen(5000, (res) => {
    console.log(`Server Started at ${5000}`)
})