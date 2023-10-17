import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email
            cardCount
            cards {
                _id
                cardText
                cardAuthor
                cardCreated
            }
        }
    }
`;

export const QUERY_ME = gql`
    query me {
        me {
            _id
            username
            email
            cardCount
            cards {
                _id
                cardText
                cardAuthor
                cardCreated
            }
        }
    }
`;

export const QUERY_CARDS = gql`
    query getCards {
       card {
           _id
           cardText
           cardAuthor
           cardCreated
       } 
    }
`;