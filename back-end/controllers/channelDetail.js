require('dotenv').config();

const jwt = require('jsonwebtoken')

const mongoose = require('mongoose');
const channelModel = require('../models/Channel');
const userModel = require('../models/User');
const Post = require('../models/Post')


const oneChannel = async(req, res) =>{
    console.log("[Channel Function]Get channel Detail");
    let filter = req.params.id.toString();
    let result = await channelModel.findOne({name:filter});
    res.status(200).send(result);
};

const isJoined = async(req, res)=>{
    console.log("[Channel Function] checkJoin");
    try{
        //get user info
        let userDoc = await userModel.findById(req.user._id);
        if(!userDoc){
            return res.status(404).json({message:"Can't find User"});
        }
         // find suscrib array
        let subscribedArray = userDoc.channel.toObject();
        let newChannel = req.body.channelname;
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
        let userDoc = await userModel.findById(req.user._id);
        if(!userDoc){
            return res.status(404).json({message:"Can't find User"});
        }
        // query database
        let subscribedArray = userDoc.channel.toObject();

        let newChannel = req.body.channelname;
        
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
        let userDoc = await userModel.findById(req.user._id);
        if(!userDoc){
            return res.status(404).json({message:"Can't find User"});
        }

        // query database
        let subscribedArray = userDoc.channel.toObject();
        let newArray = [];

        let newChannel = req.body.channelname;
        let modified = false;
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

    const userFound = await userModel.findOne({_id:req.user._id})

    if (!courseFound) return res.status(409).json({message:"Course not found"});

    if (!userFound) return res.status(409).json({message:"User not found"});

    if (userFound.channel.includes(req.params.id)){
        res.status(200).send(courseFound)
    }

    else{
        res.status(402).send()
    }

};

const allChannels = async (req,res) =>{
    const allChannel = await channelModel.find({})
    if (!allChannel) return res.status(409).json({message:"No channels found"});

    res.status(200).send(allChannel)
}

module.exports = {
    oneChannel,
    joinChannel,
    leaveChannel,
    isJoined,
    viewChannel,
    allChannels
};