require('dotenv').config();

const jwt = require('jsonwebtoken')

const mongoose = require('mongoose');
const channelModel = require('../models/Channel');
const userModel = require('../models/User');


const channel = async(req, res) =>{
    console.log("[Channel Function]Get channel Detail");
    let filter = req.params.id;
    let result = await channelModel.find({id:filter}).lean();
    res.send(result);
};

const isJoined = async(req, res)=>{
    console.log("[Channel Function] checkJoin");
    try{
        //get user info
        let userObj = jwt.verify(req.header('Token'), process.env.SECRET_TOKEN);
        let userDoc = await userModel.findById(userObj._id);
        if(!userDoc){
            return res.status(404).json({message:"Can't find User"});
        }
         // find suscrib array
        let subscribedArray = userDoc.channel.toObject();
        let newChannel = req.body.channelId;
        for(let i = 0; i < subscribedArray.length; i++){
            if(subscribedArray[i] == newChannel){
                return res.status(200).json({joined:true});
            }
        }
        return res.status(200).json({joined:false});

    }catch(err){
        console.log(err);
        return res.status(400).json({message:"Bad Request"});
    }
}

const joinChannel = async(req, res) => {
    console.log("[Channel Function] joinChannel");
    try{
        // find user info
        let userObj = jwt.verify(req.header('Token'), process.env.SECRET_TOKEN);
        let userDoc = await userModel.findById(userObj._id);
        if(!userDoc){
            return res.status(404).json({message:"Can't find User"});
        }
        // query database
        let subscribedArray = userDoc.channel.toObject();

        let newChannel = req.body.channelId;
        
        for(let i = 0; i < subscribedArray.length; i++){
            if(subscribedArray[i] == newChannel){
                return res.status(409).json({message:"Already Joined"});
            }
        }
        
        userDoc.channel.push(newChannel);
        await userDoc.save(function(){});
        return res.status(200).json({});

    }catch(err){
        console.log(err);
        return res.status(400).json({message:"Bad Request"});
    }
}; 

const leaveChannel = async(req, res) =>{
    console.log("[Channel Function] leave Channel");
    try {
        //authorize user
        let userObj = jwt.verify(req.header('Token'), process.env.SECRET_TOKEN);
        let userDoc = await userModel.findById(userObj._id);
        if(!userDoc){
            return res.status(404).json({message:"Can't find User"});
        }

        // query database
        let subscribedArray = userDoc.channel.toObject();
        let newArray = [];

        let newChannel = req.body.channelId;
        let modfied = false;
        for(let i = 0; i < subscribedArray.length; i++){
            if(subscribedArray[i] == newChannel){
                modified = true;
            }else{
                newArray.push(subscribedArray[i]);
            }
        }
        
        if(modified){
            userDoc.channel = newArray;
            await userDoc.save(function(){});
            return res.status(200).json({message:"Done"});
        }else{
            return res.status(409).json({message:"Not Joined"});
        }
           
    } catch (err) {
        console.log(err);
        return res.status(400).json({message:"Bad Request"});
    }
}


const viewChannel = async (req, res) => {
    
    const courseFound = await Post.find({coursename:req.params.id}).sort({date:-1})

    if (!courseFound) return res.status(409).json({message:"User not found"});

    res.status(200).send(courseFound)

};

module.exports = {
    channel,
    joinChannel,
    leaveChannel,
    isJoined,
    viewChannel
};