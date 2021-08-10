'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
const mongoose = require('mongoose');
const UserModel = require('./module/user.js');


const PORT = process.env.PORT;



mongoose.connect('mongodb://localhost:27017/bestBook',
    { useNewUrlParser: true, useUnifiedTopology: true });



// http://localhost:3001/books?email=mohammadkabbara40@gmail.com
app.get('/books', getBooks);
app.post('/addBook', getBooksPost);
app.get('/', homepage);


function homepage(req, res) {
    res.send('Hello ');
}


function getBooks(req, res) {
    const { email } = req.query;
    UserModel.find({ email: email },

        function (err, data) {
            if (err) res.send('error');
            else {
                // console.log(data);
              res.send(data[0].books)
            }
        });
  
}

function getBooksPost(req, res){

    const {name, description, img} = req.body;
    console.log(name);

    UserModel.find({email:email}, (error, userData)=>{
        if(error){
            res.send('did not work')
        } else{
            userData[0].books.push({
                name: name,
                description: description,
                img: img
            })
            userData[0].save();
            res.send(userData[0].books)
        }
    })
}






app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})