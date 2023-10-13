const { AuthenticationError } = require('apollo-server-express');
const { User, Card } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User().find().populate('cards');
    },
        user: async (parent, { username }) => {
            return User().findOne({ username }).populate('cards');
    },
        cards: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Card().find(params).sort({ createdAt: -1 });
    },
        card: async (parent, { cardId }) => {
            return Card().findOne({ _id: cardId });
    },
        me: async (parent, args, context) => {
            if (context.user) {
                return User().findOne({ _id: context.user._id }).populate('cards');
    }
            throw new AuthenticationError('You need to be logged in!');
    },
},

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = User().create({ username, email, password });
            const token = signToken(user);
            return { token, user };
    },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
    }

        const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
    }

        const token = signToken(user);

        return { token, user };
    },
        addCard: async (parent, { cardText, cardAuthor, cardTitle }) => {
            const card = await Card().create({ cardText, cardAuthor, cardTitle });

            await User().findOneAndUpdate(
                { username: cardAuthor },
                { $addToSet: { cards: card._id } }
            );

            return card;
    },
        addComment: async (parent, { cardId, commentText, commentAuthor }) => {
            return Card().findOneAndUpdate(
                { _id: cardId },
                {
                    $addToSet: { comments: { commentText, commentAuthor } },
                },
                {
                    new: true,
                    runValidators: true,
                }
            );
    },
        removeCard: async (parent, { cardId }) => {
            return Card().findOneAndDelete({ _id: cardId });
    },
        removeComment: async (parent, { cardId, commentId }) => {
            return Card().findOneAndUpdate(
                { _id: cardId },
                { $pull: { comments: { _id: commentId } } },
                { new: true }
            );
    },
    },
};

module.exports = resolvers;
    