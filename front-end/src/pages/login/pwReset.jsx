import "./pwRest.css"
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useState } from "react"
import axios from "axios"
import { useHistory } from "react-router"

export default function PwReset(props){
    const [message,setMessage] = useState("")
    const [mStyle, setmStyle] = useState("")
    const [email,setEmail] = useState("")
    const [newPassword,setNewPassword] = useState("")
    const history = useHistory()


    const resetPassword = async (e)=>{

        if (!email || !newPassword) {
            e.preventDefault()
            setmStyle("messageShow")
            setMessage("Email or new password fields are missing!")
            setTimeout(()=>{
                setmStyle("")
                setMessage("")
            },4000);
            return
        }

        const resetDetails = {
            email : email,
            newPassword: newPassword
        }

        try{
            const res = await axios.post('/reset',resetDetails)
            console.log('here 1');
            if (res.status === 200){
                console.log(res.status)
                console.log('here 5');
                setmStyle("messageShow")
                setMessage(res.data.message)
                setTimeout(()=>{
                    setmStyle("")
                    setMessage("")
                    history.push('/login')
                },1500)
                
            }

        }catch(error){
            console.log('here 2');
            e.preventDefault()
            setmStyle("messageShow")
            console.log(error.response.data.message);
            setMessage(error.response.data.message)
            setTimeout(()=>{
                setmStyle("")
                setMessage("")
            },4000);

        }

    }

    return(
        <div className = "pwResetPage">
            <div className = "signinTitle">
                <div className = "title">
                    Forgot your password?
                </div>
                <div className = "subTitle">
                    Don't worry, we got you.
                </div>
            </div>
            <div className = "inputArea">
                <div>
                <TextField variant = "outlined"
                            label = "Email"
                            required
                            value = {email}
                            onChange = {(e)=>{setEmail(e.target.value)}}
                            className = "emailInput"></TextField>
                </div>
                
                <div className='passwordField'>
                <TextField variant = "outlined"
                            label = "New Password"
                            type="Password"
                            required
                            value ={newPassword}
                            onChange = {(e)=>{setNewPassword(e.target.value)}}
                            className = "passwordInput"></TextField>
                </div>
                <div className={mStyle}>
                    <p className="errMessage">{message}</p>
                </div>
                
                <div className = "nextButtonArea">
                    <Button onClick={resetPassword} variant = "contained" 
                            className = "nextButton">Reset</Button>
                </div>
            </div>
        </div>
    )
}