const { Schema, model } = require('mongoose');


const EventSchema = new Schema({
    eventName: {
        type: String,
        required:[true, "Please enter Event Name"],
    },
    eventNotes: {
        type: String,
    },
    eventStart: {
        type: Date,
        required: [true, "Please enter event start date"],
    },
    eventEnd: {
        type: Date,
        required: [true, "Please enter Event end date"]
    },
    enableNotifications: {
        type: Boolean,
    },
    privacySetting: {
        type: String,
    }
});

const Event = model('Event', EventSchema);

module.exports = Event;