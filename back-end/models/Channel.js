const mongoose = require('mongoose');

const channelSchema = new mongoose.Mongoose.Schema({
    id:{
        type:Number,
        default:0
    },
    icon:{
        type:String,
        default: 'https://img.icons8.com/external-photo3ideastudio-solid-photo3ideastudio/64/000000/external-channel-digital-business-photo3ideastudio-solid-photo3ideastudio.png'
    },
    detail:{
        type:String,
        default:'No Detail Provided'
    },
    avg_grade:{
        type:Number,
        default:0
    },
    rating:{
        type:Number,
        default:0
    }
})

module.exports = mongoose.model('channel', channelModel, 'channel_detail');