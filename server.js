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


app.get('/', homepage);
function homepage(req, res) {
    res.send('Hello ');
}
// http://localhost:3001/books?email=mohammadkabbara40@gmail.com
app.get('/books', getBooks);


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
    // console.log('email', email);
    // console.log('email2',email2);

}





app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})