require('dotenv').config();
const mongoose = require('mongoose');
const axios = require('axios');
const channelModel = require('../models/Channel');
let dbconnected = false;

async const channel = (req, res) => {
    mongoose.connect(process.env.CHANNELDB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
    let db = mongoose.connection;
    db.on('error', (err)=>{console.log('mongoose error' + err)});
    let filter = req.params.id;
    let result = await channelModel.find({id:filter}).lean();
    mongoose.connection.close();
    res.send(result);
};

const joinChannel = (req, res) => {
    if(!user_enrolled.includes(req.params.id)){
        user_enrolled.push(req.params.id);
    }
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