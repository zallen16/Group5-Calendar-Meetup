const typeDefs = `
  input SubscriptionInput {
    endpoint: String
    expirationTime: String
    keys: Key
  }

  input Key {
    p256dh: String
    auth: String
  }

  type Profile {
    _id: ID
    name: String
    email: String
    password: String

  }

  type Event{
    _id: ID
    eventName: String
    eventNotes: String
    eventStart: String
    eventEnd: String
    enableNotifications: Boolean
    privacySetting: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    allprofiles: [Profile]!
    profile: Profile
    allevents: [Event]
    event(eventId: ID): Event
  }

  type Mutation {
    addProfile(
      name: String!, 
      email: String!, 
      password: String!
    ): Auth
    login(
      email: String!, 
      password: String!
    ): Auth
    addEvent(
      eventName: String!,
      eventNotes: String!,
      eventStart: String!,
      eventEnd: String!,
      enableNotifications: Boolean!,
      privacySetting: String!
    ): Event
    deleteEvent(eventId: ID): Event

    removeProfile(profileId: ID!): Profile
    saveSubscription(newSubscription: SubscriptionInput!): Profile
  }
`;

module.exports = typeDefs;
