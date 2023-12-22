const express = require('express');
const cors = require('cors');
const parser = require("body-parser");
require("dotenv").config();
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(parser.json());
mongoose.connect(process.env.MONGODB);

//Creating a schema for mongoDB database
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String
});

const User = mongoose.model('User', contactSchema);


//Saving the data from frontend when a post request is posted
app.post('/', async (req, res) => {
    const new_user = new User({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    })
    const doc = await new_user.save();
    res.json(doc);
});

//Sending the data to the frontend when a get method is posted
app.get('/',async (req,res)=>{
    const docs = await User.find({});
    const latest = docs.pop();
    res.send("Hello "+ latest.name + "!!!");
});


//Listening to the server.
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}.`);
  });