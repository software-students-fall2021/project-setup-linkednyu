import "./signUp.css"
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

export default function signUp(props){
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
                    <Button variant = "contained" 
                            className = "nextButton"> Next</Button>
                </div>
        </div>
    )
}