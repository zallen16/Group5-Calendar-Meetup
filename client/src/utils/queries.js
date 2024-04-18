import { gql } from '@apollo/client';

export const QUERY_EVENT = gql`
query matchups($_id: String) {
  matchups(_id: $_id) {
    _id
    tech1
    tech2
    tech1_votes
    tech2_votes
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