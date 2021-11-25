import './joinClass.css'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';


import { useState } from "react";
import { useEffect } from "react";

import axios from 'axios'
import { Link } from "react-router-dom"


const JoinClass = (props) => {
    
    const url = "/channel/";
    const [loading, setLoading] = useState(true);
    const [course, setCourse] = useState(null);
    const [isJoined, setIsJoined] = useState(false);


    useEffect(() =>{
        // make api query obj
        let classId = props.match.params.id;
        //get class info
        try{
            axios.get(url + "detail/" + classId)
            .then((res) =>{
                if(res.data){
                    setCourse(res.data);
                    let body = {
                        channelId:classId
                    }
                    let config = {
                        headers:{
                            'Token':localStorage.getItem('token'),
                        }
                    }
                    axios.post(url + "isJoined/", body, config)
                        .then((res1) =>{
                            setIsJoined(res1.data.joined);
                        })  
                }
            })
            setLoading(false);
        }catch(err){
            console.log(err);
        } 
        
    }, [props]);

    const joinClass = () => {
        let config = {
            headers:{
                'Token':localStorage.getItem('token'),
            }
        }
        let postObj = {
            channelId:course.name
            }
        axios.post(url + "join/", postObj, config)
                        .then((res) =>{
                            axios.post(url + "isJoined/", postObj, config)
                                .then((res1) =>{
                                setIsJoined(res1.data.joined);
                            })
                        })    
    }

    const leaveClass = () => {
        let config = {
            headers:{
                'Token':localStorage.getItem('token'),
            }
        }
        let postObj = {
            channelId:course.name
        }
        axios.post(url + "leave/", postObj, config)
                        .then((res) =>{
                            axios.post(url + "isJoined/", postObj, config)
                                .then((res1) =>{
                                setIsJoined(res1.data.joined);
                            })
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