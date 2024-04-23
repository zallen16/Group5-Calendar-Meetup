import { gql } from '@apollo/client';

export const QUERY_PROFILE = gql`
query {
  profile {
    _id
    name
    email
  }
}
`;

export const QUERY_EVENT = gql`
query($eventId: ID) {
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
query{
  allevents {
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

export const QUERY_PROFILE_EVENTS = gql`
query {
  profile {
    eventList {
      _id
    }
  }
  allevents {
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