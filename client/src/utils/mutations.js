import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
mutation ($name: String!, $email: String!, $password: String!) {
  addProfile(name: $name, email: $email, password: $password) {
    profile {
      _id
      name
      email
      password
      eventList {
        _id
        eventName
        eventNotes
        eventStart
        eventEnd
        enableNotifications
        privacySetting
      }
      friendList
    }
    token
  }
}
`;

export const LOGIN = gql`
mutation ($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    profile {
      _id
      name
      email
      password
    }
    token
  }
}
`;
export const REMOVE_PROFILE = gql`
mutation($profileId: ID!) {
  removeProfile(profileId: $profileId) {
    name
    email
    friendList
  }
}
`;

export const ADD_EVENT = gql`
mutation ($eventName: String!, $eventStart: String!, $eventEnd: String!, $eventNotes: String!, $enableNotifications: Boolean!, $privacySetting: String!){
  addEvent(eventName: $eventName, eventStart: $eventStart, eventEnd: $eventEnd, eventNotes: $eventNotes, enableNotifications: $enableNotifications, privacySetting: $privacySetting, ) {
    _id
    eventEnd
    eventName
    eventNotes
    eventStart
    privacySetting
    enableNotifications
  }
}
`;
export const DELETE_EVENT = gql`
mutation ($profileId: ID!) {
  removeProfile(profileId: $profileId) {
    name
    email
    friendList
  }
}
`;

export const ADD_FRIEND = gql`
mutation ($friendId: ID!) {
  addFriend(friendId: $friendId) {
    _id
    name
    email
    password
  }
}
`;
 export const REMOVE_FRIEND = gql`
 mutation ($friendId: ID!) {
  removeFriend(friendId: $friendId) {
    _id
    email
    name
    password
    friendList
    eventList {
      _id
      eventName
    }
  }
}
 `;