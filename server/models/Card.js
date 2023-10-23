const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const cardSchema = new Schema({
    cardText: {
        type: String,
        required: 'You need to provide text for this card!',
        minlength: 1,
        maxlength: 400,
        trim: true
    },
    cardAuthor: {
        type: String,
        required: 'You need to provide an author for this card!',
        trim: true
    },
    cardCreated: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp)
    },
    cardRemove: {
        type: Boolean,
        default: false
    },
});

const Card = model('Card', cardSchema);

module.exports = Card;