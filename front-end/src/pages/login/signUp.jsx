import "./signUp.css"
import { Button } from "../../components/Button"

import TextField from '@mui/material/TextField'
import { Link } from "react-router-dom"


export default function SignUp({setLoggedIn}){
    return(
        <div className = "signupPage">
            <div className = "title">
                Sign up
            </div>
            <div className = "form">
                <div className = "unInputArea">
                    <TextField variant = "outlined"
                            label = "User Name"
                            required
                            className = "unInput"></TextField>
                </div>
                <div className = "emailInputArea">
                    <TextField variant = "outlined"
                            label = "Email"
                            required
                            className = "emailInput"></TextField>
                </div>
                <div className = "pwInputArea">
                    <TextField variant = "outlined"
                            label = "Password"
                            required
                            type = "password"
                            className = "pwInput"></TextField>
                </div>
            </div>
            <div className = "nextButtonArea">
            <Link to="/"><Button onClick={() => setLoggedIn(true)} buttonSize="btn--large" buttonStyle="btn--primary--solid" className="loginButton">Next</Button></Link>
                </div>
        </div>
    )
}