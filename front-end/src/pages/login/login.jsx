import "./login.css"
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { Link } from "react-router-dom"

export default function login({setLoggedIn}){
    return(
        <div className = "loginPage">
            <div className = "signinTitle">
                Sign in
            </div>
            <div className = "inputArea">
                <div className = "emailArea">
                    <TextField variant = "outlined"
                                label = "Email"
                                required
                                className = "emailInput"></TextField>
                </div>
                <div className = "passwordArea">
                    <TextField variant = "outlined" 
                                label = "Password"
                                type = "Password"
                                required
                                className = "passwordInput"></TextField>
                </div>
                <div className = "underArea">
                    <div className = "otherOptions">
                        <div>
                            <Link to = "/pwreset" className = "otherOptIns">Having trouble?</Link>
                        </div>
                        <div>
                            <Link to = "/signup" className = "otherOptIns">I'm new, Sign me up!</Link>
                        </div>
                    </div>
                    <div className = "loginButtonArea">
                        <Link to="/"><Button onClick={()=>setLoggedIn(true)} variant = "contained" className = "loginButton">Go!</Button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}