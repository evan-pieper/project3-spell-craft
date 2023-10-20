import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {  //this is the mutation that will be used to add a user
    addUser(username: $username, password: $password, email: $email) {
      username
      password
      createdAt
      cards {
        _id
        cardText
        cardAuthor
        createdAt
      }
    }
  }
`;

module.exports = ADD_USER;  //export the ADD_USER mutation