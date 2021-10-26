import "./login.css"
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

export default function login(props){
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
                            <a href = "/pwreset" className = "otherOptIns">Having trouble?</a>
                        </div>
                        <div>
                            <a href = "/signup" className = "otherOptIns">I'm new, Sign me up!</a>
                        </div>
                    </div>
                    <div className = "loginButtonArea">
                        <Button variant = "contained" className = "loginButton"> Go!</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}