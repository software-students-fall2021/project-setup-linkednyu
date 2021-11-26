import './joinClass.css'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';


import { useState } from "react";
import { useEffect } from "react";

import { useHistory } from "react-router"
import axios from 'axios'
import { Link } from "react-router-dom"


const JoinClass = (props) => {
    
    const url = "/channel/";
    const [loading, setLoading] = useState(true);
    const [course, setCourse] = useState(null);
    const [isJoined, setIsJoined] = useState(false);
    const history = useHistory()
    let token = localStorage.getItem('token')


    useEffect(() =>{
        // make api query obj
        let classname = props.match.params.id;
        //get class info
        try{
           axios.get(url + "detail/" + classname,{headers:{'Token':token}})
            .then(async (res) =>{
                if(res.data){
                    setCourse(res.data);
                    let body = {
                        channelname:classname
                    }
                   await axios.post(url + "isJoined/", body, {headers:{'Token':token}})
                        .then((res1) =>{
                            setIsJoined(res1.data.joined);
                        })  
                }
            })
            setLoading(false);
        }catch(err){
            console.log(err);
        } 
        // eslint-disable-next-line
    }, [props]);

    const joinClass = async () => {
        let postObj = {
            channelname:course.name
            }
       await axios.post(url + "join/", postObj, {headers:{'Token':token}})
                        .then(async (res) =>{
                            await axios.post(url + "isJoined/", postObj, {headers:{'Token':token}})
                                .then((res1) =>{
                                setIsJoined(res1.data.joined);
                            })
                            history.push(`/channel/${course.name}`)
                        })    
    }

    const leaveClass = async () => {
        let postObj = {
            channelname:course.name
        }
        await axios.post(url + "leave/", postObj, {headers:{'Token':token}})
                        .then(async (res) =>{
                            await axios.post(url + "isJoined/", postObj, {headers:{'Token':token}})
                                .then((res1) =>{
                                setIsJoined(res1.data.joined);
                            })
                            history.push("/")
                        })   
    }

    const genClass= ()=>{
        if(course){
            return (
                <div>
                    <div className = "classTitle">
                        <Avatar src = {course.icon}></Avatar>
                        <div className = "classTitleInstructor">
                            <div className = "className">{course.name}</div>
                            <div className = "instructorName">{course.instructor}</div>
                        </div>
                    </div>
                    <div className = "classDescription">
                        <br />
                        <div>
                            {course.detail}
                        </div>
                        <br />
                    </div>
                </div>
            )
        }else{
            return (
                <div>
                    <br />
                    <div className = "classDescription">Sorry, We can't find the information about this course</div>
                    <br />
                </div>
            )
        }
    }

    const genButton = ()=>{
        return (
            <div>
                {course && isJoined && <Button variant="contained" className = "joinButton" onClick={leaveClass}>Leave</Button>}
                {course && !isJoined && <Button variant="contained" className = "joinButton" onClick={joinClass}>Join</Button>}
                {!course && <Link to="/"><Button variant="contained" className = "joinButton">Return Home</Button></Link>}                
            </div>
        )
    }

    return (
        <div className = "joinClass">
            {!loading && genClass()}
            {!loading && genButton()}
        </div>
    )
}
export default JoinClass