import "./signUp.css"
import { Button } from "../../components/Button"

import TextField from '@mui/material/TextField'
import { useState } from "react"
import axios from 'axios'
import { useHistory } from "react-router"


export default function SignUp(){
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword]=useState("")
    const [message,setMessage] = useState("")
    const [mStyle, setmStyle] = useState("")
    const history = useHistory()

    const onSignUp = async (e) => {
        
        if (!name || !email || !password) {
            e.preventDefault()
            setmStyle("messageShow")
            setMessage("Name , Email or password fields are missing!")
            setTimeout(()=>{
                setmStyle("")
                setMessage("")
            },4000);
            return
        }

        let newName = name.split(" ");
        let randNumber = Math.floor(Math.random()*300)
        let uName = newName[0] + randNumber.toString()
        
        const signUpDetails = {
            "name":name,
            "username":uName,
            "email":email,
            "password":password
        };

        try{
            const res = await axios.post('http://localhost:5000/register',signUpDetails)
            if (res.status === 200){
                setMessage("You signed up!,You will be redirected to the login page shortly")
                history.push('/login')
            }
        }catch (err){
            e.preventDefault()
            setmStyle("messageShow")
            setMessage(err.response.data.message)
            setTimeout(()=>{
                setmStyle("")
                setMessage("")
            },4000);
        }

    }

    

    return(
        <div className = "signupPage">
            <div className = "title">
                Sign up
            </div>
            <div className = "form">
                <div className = "unInputArea">
                    <TextField variant = "outlined"
                            label = "Name"
                            required
                            className = "unInput"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            ></TextField>
                </div>
                <div className = "emailInputArea">
                    <TextField variant = "outlined"
                            label = "Email"
                            required
                            className = "emailInput"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}></TextField>
                </div>
                <div className = "pwInputArea">
                    <TextField variant = "outlined"
                            label = "Password"
                            required
                            type = "password"
                            className = "pwInput"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}></TextField>
                </div>
            </div>
            <div className={mStyle}>
                    <p className="errMessage">{message}</p>
            </div>
            <div className = "nextButtonArea">
            <Button onClick={onSignUp} buttonSize="btn--large" buttonStyle="btn--primary--solid" className="loginButton">Next</Button>
                </div>
        </div>
    )
}