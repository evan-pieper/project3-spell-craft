import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email:$email, password:$password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username:$username, email:$email, password:$password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_CARD = gql`
    mutation addCard($cardText: String!) {
        addCard(cardText:$cardText) {
            _id
            cardText
            cardAuthor
            cardCreated
        }
    }
`;

export const REMOVE_CARD = gql`
    mutation removeCard($cardId: ID!) {
        removeCard(cardId:$cardId) {
            _id
            cardText
            cardAuthor
            cardCreated
        }
    }
`;

