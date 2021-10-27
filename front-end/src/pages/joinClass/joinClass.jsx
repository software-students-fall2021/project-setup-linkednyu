import './joinClass.css'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import { useState } from "react";
import { useEffect } from "react";

import axios from 'axios'

const JoinClass = (props) => {
    
    const url = "https://617844e8bb979200171ff63e.mockapi.io/class/detail/"
    const [course, setCourse] = useState(null)

    useEffect(() =>{
        let num = Math.floor(Math.random() * 49 + 1)
        console.log(num)
        axios.get(url + num).then((res) =>{
            setCourse(res.data);
        })
    }, []);

    const genClass= ()=>{
        if(course != null){
            return (
                <div>
                    <div className = "classTitle">
                        <Avatar src = {course.avatar}>CL</Avatar>
                        <div className = "classTitleInstructor">
                            <div className = "className">{course.name}</div>
                            <div className = "instructorName">Prof.{course.instructor}</div>
                        </div>
                    </div>
                    <div className = "classDescription">
                        <br />
                        <div>
                            {course.description}
                        </div>
                        <br />
                    </div>
                </div>
            )
        }
    }

    return (
        <div className = "joinClass">
            {genClass()}
            <div>
                <Button variant="contained" className = "joinButton">Join Class</Button>
            </div>
        </div>
    )
}
export default JoinClass