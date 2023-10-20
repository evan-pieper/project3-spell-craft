const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const cardSchema = new Schema({  //create the Card schema so mongoose knows how to work with the data
    cardText: {
        type: String,
        required: 'You need to provide text for this card!',
        minlength: 1,
        maxlength: 400,
        trim: true
    },
    cardAuthor: {
        type: Schema.Types.ObjectId, //this will hold the _id of the user who created the card, which we will use to pull in the user data for a card
        required: 'You need to provide an author for this card!',
        ref: 'User'  //this tells the schema which document to search to find the right user
    },
    cardCreated: {  //consider making a second value for the last date the card was modified
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp)
    }
});

const Card = model('Card', cardSchema);

module.exports = Card;