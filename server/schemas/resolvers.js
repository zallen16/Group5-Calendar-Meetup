const { Profile,Event} = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    allprofiles: async (parent,args,context) => {
      if (context.user) {
        return Profile.find();
      }
    },

    profile: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
    },
    allevents: async (parent,args,context) => {
      if (context.user) {
        return Event.find();
      }
    },

    event: async (parent,{eventId}, context) => {
      if (context.user) {
        return Event.findOne({ _id: eventId });
      }
    },

  },

  Mutation: {
    addProfile: async (parent, { name, email, password }) => {
      const profile = await Profile.create({ name, email, password });
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw AuthenticationError;
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(profile);
      return { token, profile };
    },
    removeProfile: async (parent, { profileId }, context) => {
      if (context.user) {
        return Profile.findOneAndDelete({ _id: profileId });
      }
    },
    addEvent: async (parent, { eventName, eventNotes, eventStart, eventEnd, enableNotifications, privacySetting }, context) => {
      if (context.user) {
        const event = await Event.create({ eventName, eventNotes, eventStart, eventEnd, enableNotifications, privacySetting });
        const profile=await Profile.findOneAndUpdate(
          {_id:context.user.id},
          {$addToSet:{eventList:event}},
          {new:true,runValidators:true}
        );
        return {event,profile};
      }
    },
    deleteEvent: async (parent, { eventId }, context) => {
      if (context.user) {
        return Event.findOneAndDelete({ _id: eventId });
      }
    },
    addFriend: async (parent, { friendId}, context) => {
      if (context.user) {
        // const friend = await Friend.create({name, email});
        const profile=await Profile.findOneAndUpdate(
          {_id:context.user._id},
          {$addToSet:{friendList:friendId}},
          {new:true,runValidators:true}
        );
        return profile;
      }
    },
    removeFriend: async (parent, { friendId}, context) => {
      if (context.user) {
        // const friend = await Friend.create({name, email});
        const profile=await Profile.findOneAndUpdate(
          {_id:context.user._id},
          {$pull:{friendList:friendId}},
          {new:true,runValidators:true}
        );
        return profile;
      }
    },
  }
};

module.exports = resolvers;
