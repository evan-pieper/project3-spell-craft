const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    cards: [Card]
    cardCount: Int
}

type Card {
    _id: ID
    cardText: String
    cardAuthor: String
    cardCreated: String
    cardRemove: Boolean
}

type Auth {
    token: ID!
    user: User
}

type Query {
    users: [User]
    user(username: String!): User
    cards(username: String): [Card]
    card(cardId: ID!): Card
    me: User
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCard(cardText: String!, cardAuthor: String!, cardTitle: String!): Card
    removeCard(cardId: ID!): Card
}
`;

module.exports = typeDefs;
