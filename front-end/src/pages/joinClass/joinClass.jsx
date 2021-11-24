import './joinClass.css'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';


import { useState } from "react";
import { useEffect } from "react";

import axios from 'axios'
import { Link } from "react-router-dom"


const JoinClass = (props) => {
    
    const url = "/channel/"
    const [course, setCourse] = useState(null)
    const [isJoined, setIsJoined] = useState(false);

    let classId = props.match.params.id;
    let postObj = {
        email:"tw2198@nyu.edu",
        channelId: classId
    }

    useEffect(() =>{
        //get class info
        axios.get(url + "detail/" +classId)
            .then((res) =>{
                if(res.data.length >= 0){
                    setCourse(res.data[0]);
                    axios.post(url + "isJoined/", postObj)
                        .then((res1) =>{
                            setIsJoined(res1.data.joined);
                        })  
                }
            })

    }, []);

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

    const joinClass = () => {
        console.log("join class button click")
        axios.post(url + "join/", postObj)
                        .then((res) =>{
                            axios.post(url + "isJoined/", postObj)
                                .then((res1) =>{
                                setIsJoined(res1.data.joined);
                            })
                        })    
    }

    const leaveClass = () => {
        console.log("leave class button click")
        axios.post(url + "leave/", postObj)
                        .then((res) =>{
                            axios.post(url + "isJoined/", postObj)
                                .then((res1) =>{
                                setIsJoined(res1.data.joined);
                            })
                        })   
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
            {genClass()}
            {genButton()}
        </div>
    )
}
export default JoinClass