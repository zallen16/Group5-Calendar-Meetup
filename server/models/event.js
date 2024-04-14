const { Schema, model } = require('mongoose');


const EventSchema = new Schema({
    eventName : {
        type: String,
        required:[true,"Please enter Event Name"],
    },
    eventNotes: {
        type: String,

    },
    eventStart : {
        type: Date,
        required: [true,"Please enter event start date"],
    },
    eventEnd:{
        type: Date,
        required: [true,"Please enter Event end date"]
    },
    enableNotifications :{
        type: Boolean,
    },
    creatorID:{
        ref:'Profile',
      type:Schema.Types.ObjectID ,
      required:true
    },
    privacySetting:{
        type:String,
    },
    guestList:[{
        ref:'Profile',
        type:Schema.Types.ObjectID,
    }]

});

const Event = model('Event',EventSchema);

module.exports = Event;