const { Profile, Event } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const { setUpNotification } = require('../utils/notifications');
const later = require('@breejs/later');


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
        const profile = await Profile.findOneAndUpdate(
          {_id: context.user._id},
          { $addToSet: {eventList: event._id}},
          {new: true, runValidators: true}
        );
        if (event.enableNotifications){
          const subscription = profile.subscription;
          if (!subscription){
            // if their subscription is null, just return the event and skip the other parts
            return event;
          }
          let time = new Date(event.eventStart);
          time.setMinutes(time.getMinutes()-15);
          const sched = later.schedule({schedules: [{m: [time.getMinutes()], h: [time.getHours()], D: [time.getDate()], M: [time.getMonth()+1], Y: [time.getFullYear()]}]});
          const notificationMessage = `Your event ${event.eventName} starts in 15 minutes`
          await Profile.findOneAndUpdate(
            {_id: context.user._id},
            { $addToSet: {notificationList: {eventId: event._id, schedule: sched, message: notificationMessage}}},
            {new: true, runValidators: true}
          );
          await setUpNotification(event._id, subscription, notificationMessage, sched);
        }
        return event;
      }
    },
    deleteEvent: async (parent, { eventId }, context) => {
      if (context.user) {
        const event = await Event.findOneAndDelete({ _id: eventId });
        await Profile.findOneAndUpdate(
          {_id: context.user._id},
          { $pull: {eventList: eventId}},
          {new: true, runValidators: true}
        );
        await Profile.updateMany(
          {},
          {$pull: {notificationList: {eventId: eventId}}},
          {new: true, runValidators: true}
        );
        return event;
      }
    },
    saveSubscription: async (parent, {newSubscription}, context) => {
      if (context.user){
        return Profile.findOneAndUpdate({_id: context.user._id}, {subscription: newSubscription}, {new: true})
      }
    },
  }
};

module.exports = resolvers;
