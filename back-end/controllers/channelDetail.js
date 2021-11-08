const axios = require('axios');

// a list of user enrolled course id
let user_enrolled = [];

const channel = (req, res) => {
    let source = "https://618931ccd0821900178d784f.mockapi.io/channel";
    
    let id = req.params.id;
    let icon;
    let avg_grade;
    let rating;
    let detail;
    let enrolled = user_enrolled.includes(id);


    axios.get(source + "/" + id)
        .then(function(response){
            icon = response.data.icon;
            avg_grade = response.data.avg_grade;
            rating = response.data.rating;
            detail = response.data.detail;
            let r = {id, icon, avg_grade, rating, detail, enrolled};
            res.send(r);
        })
        .catch(function(error){
            console.log(error);
        });
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