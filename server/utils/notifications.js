const later = require('@breejs/later');
const webpush = require('web-push');
const { Profile, Event } = require('../models');

async function setUpNotification(eventId, subscription, message, schedule){
    let eventTime = (await Event.findById(eventId)).eventStart;
    eventTime = eventTime.setMinutes(eventTime.getMinutes()-15);
    // if the event has already passed, remove the notification from all profiles that have it and don't prepare to send one
    if (eventTime < new Date()){
        await Profile.updateMany(
            {},
            {$pull: {notificationList: {eventId: eventId}}},
            {new: true, runValidators: true}
        );
        return;
    }
    
    later.setTimeout(function() { sendNotification(subscription, message)}, schedule);
}

function sendNotification(subscription, dataToSend='') {
    webpush.sendNotification(subscription, dataToSend);
}

module.exports = {setUpNotification};