import { gql } from '@apollo/client';

export const QUERY_PROFILE = gql`
query Profile {
  profile {
    _id
    name
    email
    
  }
}
`;



export const QUERY_EVENT = gql`
query Event($eventId: ID) {
  event(eventId: $eventId) {
    _id
    eventName
    eventNotes
    eventStart
    eventEnd
    enableNotifications
    privacySetting
  }
}
`;
export const QUERY_ALLEVENTS =gql `
query Query {
  allevents {
    _id
    eventName
    eventNotes
    eventStart
    eventEnd
    enableNotification
    privacySetting
  }
}
`;

