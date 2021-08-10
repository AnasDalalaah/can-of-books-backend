'use strict';
const mongoose = require('mongoose');
const BookSchema = require('./books');




const UserSchema = new mongoose.Schema({
  email: {type:String},
  books: [BookSchema]
});

 const UserModel = mongoose.model('user', UserSchema);






const seedOwner = () => {
    const mohammad = new UserModel({
        email:"mohammadkabbara40@gmail.com",
         books: [
            {
                img:'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FP%2F0393301958.01._SCLZZZZZZZ_SX500_.jpg',

                description: 'In Volume I, E. H. Carr begins with an analysis of the events in Russian history from 1898 to 1917 that shaped the course of the Revolution. He examines the constitutional structure erected by the new government and then turns to the multifarious problems facing the Bolsheviks as they took possession of a rapidly disintegrating Russian empire.',
                status: 'good',
                name: 'TheRedBolshevikRevolution'
            },
            {
                name: 'ٌٌThe Forty Rules of Love',
                status: 'Good',
                description: ' This book explains how the charcter \'Shams\' transformed a scholar into a Sufi (mystic) through love',
                img:'https://themoderndesi.co/wp-content/uploads/2017/03/IMG_02931.jpg'
            },
           
            {
                img:'https://upload.wikimedia.org/wikipedia/commons/6/6b/1984-Big-Brother.jpg',

                description:  'Nineteen Eighty-Four, often referred to as 1984, is a dystopian social science fiction novel by the English novelist George Orwell (the pen name of Eric Arthur Blair). It was published on 8 June 1949 by Secker & Warburg as Orwells ninth and final book completed in his lifetime. Thematically, Nineteen Eighty-Four centres on the consequences of totalitarianism, mass surveillance, and repressive regimentation of persons and behaviours within society Orwell, himself a democratic socialist, modelled the totalitarian government in the novel after Stalinist Russia and Nazi Germany. More broadly, the novel examines the role of truth and facts within politics and the ways in which they are manipulated.',
                status: 'most beautiful and controversial novels in the English',
                name: 'Nineteen Eighty-Four',
                
            }

        ]
    });

console.log(mohammad)
  
   

    const anas = new UserModel({
        email:"anasfuad232@gmail.com",
        books: [{
            name: 'ٌٌRare cases ',
            status: 'Very good',
            description: 'A psychiatrist writes strange stories that happened with his patients',
            img:'https://images-na.ssl-images-amazon.com/images/I/51gmhLkMJQL._SX327_BO1,204,203,200_.jpg'
        },
        {
            img:'https://www.florenceinferno.com/wp-content/uploads/2013/11/inferno-cover-us.jpg',

            description: 'The central image is of Dante Alighieri. Since his work is the catalyst for Langdon’s adventure and he is such a monumental figure in literature I felt he had to be on the jacket. Plus, using a historical figure represented in a painting of his time firmly puts the reader in Dan Brown territory. The city scape of Florence is to give the reader a since of location… hidden behind the burnt and ripped background, which has become a sort of staple with Dan’s jackets. It adds an element of mystery… Like you are discovering something just under the surface. And of course there are the rings in the background and over the image of Dante that represent hell.',
            status: "good",
            name: 'DanBrown'
        },
       
        {
            name: 'ٌٌThe rules of Jarteen',
            status: 'Good',
            description: ' rules about a land you live in',
            img:'https://play-lh.googleusercontent.com/SxjancQW6UXiSx9z99lznn5LZoegJz8TroeqnxOyFzKppRXjH_UcAMicnypopvPM-4HF=s1200'
        }],

})


    mohammad.save();
    anas.save();
   
}


seedOwner();




module.exports =UserModel;