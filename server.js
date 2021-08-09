'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


// const jwt = require('jsonwebtoken');
// const jwksClient = require('jwks-rsa');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3010;
//MongoDB 
mongoose.connect('mongodb://localhost:27017/book', {useNewUrlParser: true, useUnifiedTopology: true});

const BookSchema = new mongoose.Schema({
  email: String,
  NameofBooks : String,
  img : String,
  decription : String
});


//compile the schema into a model
const myBookModel = mongoose.model('book',  BookSchema);
//const ownerModel = mongoose.model('owner', ownerSchema);


function seedBook(){

  const TheRedBolshevikRevolution = new myBookModel({
    email:'mohammadkabbara40@gmail.com',

    NameofBooks: 'TheRedBolshevikRevolution',
  img:'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FP%2F0393301958.01._SCLZZZZZZZ_SX500_.jpg',
  decription: 'In Volume I, E. H. Carr begins with an analysis of the events in Russian history from 1898 to 1917 that shaped the course of the Revolution. He examines the constitutional structure erected by the new government and then turns to the multifarious problems facing the Bolsheviks as they took possession of a rapidly disintegrating Russian empire.'

  });
  const DanBrown = new myBookModel({
    NameofBooks: 'DanBrown',
    email:'mohammadkabbara40@gmail.com',

  img:'https://www.florenceinferno.com/wp-content/uploads/2013/11/inferno-cover-us.jpg',

  decription: 'The central image is of Dante Alighieri. Since his work is the catalyst for Langdon’s adventure and he is such a monumental figure in literature I felt he had to be on the jacket. Plus, using a historical figure represented in a painting of his time firmly puts the reader in Dan Brown territory. The city scape of Florence is to give the reader a since of location… hidden behind the burnt and ripped background, which has become a sort of staple with Dan’s jackets. It adds an element of mystery… Like you are discovering something just under the surface. And of course there are the rings in the background and over the image of Dante that represent hell.'
  });

  const NineteenEightyFour = new myBookModel({
    NameofBooks: 'Nineteen Eighty-Four',
    email:'mohammadkabbara40@gmail.com',

  img:'https://upload.wikimedia.org/wikipedia/commons/6/6b/1984-Big-Brother.jpg',

  decription: 'Nineteen Eighty-Four, often referred to as 1984, is a dystopian social science fiction novel by the English novelist George Orwell (the pen name of Eric Arthur Blair). It was published on 8 June 1949 by Secker & Warburg as Orwells ninth and final book completed in his lifetime. Thematically, Nineteen Eighty-Four centres on the consequences of totalitarianism, mass surveillance, and repressive regimentation of persons and behaviours within society Orwell, himself a democratic socialist, modelled the totalitarian government in the novel after Stalinist Russia and Nazi Germany. More broadly, the novel examines the role of truth and facts within politics and the ways in which they are manipulated.'
  });

  console.log(TheRedBolshevikRevolution);
  TheRedBolshevikRevolution.save();
  NineteenEightyFour.save();
  DanBrown.save();
  
  console.log(myBookModel.findOne({ _id:'611124f2bdd8534fc1ed6838' }));
}




// seedBook();
// seedUser();

// Routes
// http://localhost:3010/
app.get('/',homeHandler);
app.get('/book',getBooksHandler);

function homeHandler(req,res) {
  res.send('Home Route');
}
// http://localhost:3010/book?email=mohammadkabbara40@gmail.com
function getBooksHandler(req,res) {
  const useremail = req.query.email;
  // search
  myBookModel.find({email:useremail},function(err,resultData){
      if(err) {
          console.log('Error');
      }
      else {
          console.log(resultData);
          console.log(resultData);
          res.send(resultData);
      }
  })
}


app.listen(PORT, () => console.log(`listening on ${PORT}`));
