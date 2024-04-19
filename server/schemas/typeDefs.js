const typeDefs = `
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    eventList:[Event]
    friendList:[Friend]

  }
  type Friend{
    _id:ID
    name:String
    email:String
  }

  type Event{
    _id: ID
    eventName: String
    eventNotes: String
    eventStart: String
    eventEnd: String
    enableNotification:Boolean
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
      eventNotes: String,
      eventStart: String!,
      eventEnd: String,
      enableNotifications: Boolean,
      privacySetting: String
    ): Event
    
    deleteEvent(eventId: ID): Event

    removeProfile(profileId: ID!): Profile
  }
`;

module.exports = typeDefs;
