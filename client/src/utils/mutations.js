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
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;