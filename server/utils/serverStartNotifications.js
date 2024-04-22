const { Profile, Event } = require('../models');
const { setUpNotification } = require('../utils/notifications');

async function main(){
    const notifications = await Profile.find({}, 'notificationList subscription -_id');
    console.log(notifications);
    for (let i=0; i<notifications.length; i++){
        const subscription = notifications[i].subscription;
        if (!subscription) continue; //skips the current loop
        // operate on a copy of the array just because there are potentially changes being made in setUpNotification
        notifications[i].notificationList.slice().forEach((notification) => setUpNotification(subscription, notification.message, notification.schedule));
    }
}

module.exports = main;