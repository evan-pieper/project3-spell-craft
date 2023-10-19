const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({  //create the User schema so mongoose knows how to work with the data
    username: {
        type: String,
        required: 'You need to provide a username!',
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: 'You need to provide an email address!',
        unique: true,
        match: [/.+@.+\..+/, 'You need to provide a valid email address!']  //regex to check if the email is valid
    },
    password: {  //password will be hashed before being stored in the database
        type: String,
        required: 'You need to provide a password!',
        minlength: 5
    },
    cards: [  //this will hold the _id of the cards created by the user, which we will use to pull in the card data for a user
        {
            type: Schema.Types.ObjectId,
            ref: 'Card'
        }
    ]
});

userSchema.pre('save', async function (next) {  //before creating the user, or updating there password, we need to hash the password
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;

        this.password = await bcrypt.hash(this.password, saltRounds);  //hash the password with bcrypt
    }

    next();
});

userSchema.methods.isCorrectPassword = async function (password) {  //this method will be used to compare the hashed password to the one the user enters
    return bcrypt.compare(password, this.password);
};

userSchema.virtual('cardCount').get(function () {  //this will count the number of cards a user has
    return this.cards.length;
});

const User = model('User', userSchema); //create the User model

module.exports = User;  //export the User model