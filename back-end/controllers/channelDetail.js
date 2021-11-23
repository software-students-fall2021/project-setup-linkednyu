require('dotenv').config();
const mongoose = require('mongoose');
const axios = require('axios');
//const channelModel = require('../models/Channel');
let dbconnected = false;

//model
const channelSchema = new mongoose.Schema({
    id:{
        type:String,
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

const channel = async(req, res) =>{
    console.log("[Channel Function]Get channel Detail");
    let db = mongoose.createConnection(process.env.CHANNELDB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
    db.on('error', (err)=>{console.log('mongoose error' + err)});
    let channelModel  = db.model('channel', channelSchema, 'channel_detail');
    let filter = req.params.id;
    let result = await channelModel.find({id:filter}).lean();
    res.send(result);
    db.close();
};

const joinChannel = (req, res) => {
    console.log("[Channel Function] joinChannel");
    let db = mongoose.createConnection(process.env.CHANNELDB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
    db.on('error', (err)=>{console.log('mongoose error' + err)});
    let channelModel  = db.model('channel', channelSchema, 'channel_detail');
    res.send("joined");
};

const leaveChannel = (req, res) =>{
    for(let i = 0; i < user_enrolled.length; i++){
        if(user_enrolled[i] == req.params.id){
            user_enrolled.splice(i,1);
        }
    }
    res.send("done");
}

module.exports = {
    channel,
    joinChannel,
    leaveChannel
};