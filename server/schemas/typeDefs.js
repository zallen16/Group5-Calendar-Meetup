const typeDefs = `
  type Profile {
    _id: ID
    name: String
    email: String
    password: String

  }

  type Event{
    _id:Id
    eventName: String
    eventNotes: string
    eventStart: Date
    eventEnd: Date
    enableNotification:Boolean
    creatorId: objectId
    privacySetting:String

  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    event: [Event]
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addEvent(eventName:String!,eventNotes: String,eventStart:Date!):Event
    deleteEvent(eventId:Id):Event

    removeProfile(profileId: ID!): Profile
  }
`;

module.exports = typeDefs;
