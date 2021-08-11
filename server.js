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
app.post('/addBooks', createBooks);
app.delete('/books/:index', deleteBooks);

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

// app.post('/addBooks', createBooks);

function createBooks(request, response) {
    console.log(request.body);
    const { email, bookName, bookDescription, bookStatus } = request.body;
    UserModel.find({ email: email }, (error, data) => {
        console.log(data);
        data[0].books.push({
            name: bookName,
            description: bookDescription,
            status: bookStatus
        });
        data[0].save();
        response.send(data[0].books);
    });
}


function deleteBooks(req, res) {

    const index = Number(req.params.index);
    console.log(req.params);

    const { email } = req.query;
    console.log(email);
    UserModel.find({ email: email }, (err, data) => {

        const newBooksArr = data[0].books.filter((user, idx) => {

            if( idx !== index) return user;
           
        

        });
        data[0].books = newBooksArr;
        data[0].save();

        res.send(data[0].books);
    });
}





app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})