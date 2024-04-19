import { gql } from '@apollo/client';

export const CREATE_EVENT = gql`
  mutation createEvent($tech1: String!, $tech2: String!) {
    createEvent(tech1: $tech1, tech2: $tech2) {
      _id
      tech1
      tech2
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;