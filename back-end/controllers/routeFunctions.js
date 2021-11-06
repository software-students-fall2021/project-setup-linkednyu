const axios = require('axios');

var postData = []

const viewHome = (req, res) => {
    const url = "https://my.api.mockaroo.com/posts.json?key=2ae40da0"
    const picurl = "https://picsum.photos/v2/list"
    let posts = []
    let pictures = []
    
    if (postData.length === 0){
        async function fetchposts() {
            try{
    
                await axios.get(url).then(response=>{
                    response.data.map(items=>{
                        posts.push(items)
                    })
                })
    
                await axios.get(picurl).then(response=>{
                    response.data.map(items=>{
                        pictures.push(items)
                    })
                    for (let i =0 ; i<posts.length ;i++){
                        posts[i]["imgSrc"]=pictures[Math.floor(Math.random()*29)].download_url
                    }
                    posts.map(items=>{
                        postData.push(items)
                    })
                })
    
            } catch(err){
                console.log(err);
            }
    
            res.send(postData)
        }   
        
        fetchposts()
        

    }

    else{ 
        res.send(postData) 
    }

};



const viewChannel = (req, res) => {
    const url = "https://my.api.mockaroo.com/posts.json?key=2ae40da0"
    const picurl = "https://picsum.photos/v2/list"
    let posts = []
    let pictures = []
    
    if (postData.length===0){
        async function fetchChannelPosts() {
            try{
    
                await axios.get(url).then(response=>{
                    response.data.map(items=>{
                        posts.push(items)
                    })
                })
    
                await axios.get(picurl).then(response=>{
                    response.data.map(items=>{
                        pictures.push(items)
                    })
                    for (let i =0 ; i<posts.length ;i++){
                        posts[i]["imgSrc"]=pictures[Math.floor(Math.random()*29)].download_url
                    }
                    posts.map(items=>{
                        postData.push(items)
                    })
                })
    
            } catch(err){
                console.log(err);
            }
    
            res.send(postData)
        }   
    
        fetchChannelPosts()
    }
    
    else{
        res.send(postData)
    }
    
    
};


module.exports = {
    viewHome,
    viewChannel
}