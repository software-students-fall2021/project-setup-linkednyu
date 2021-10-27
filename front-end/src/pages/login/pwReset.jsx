import "./pwRest.css"
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { Link } from "react-router-dom"

export default function pwReset(props){
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
                <TextField variant = "outlined"
                            label = "Email"
                            required
                            className = "emailInput"></TextField>
                <div className = "nextButtonArea">
                    <Link to="/pwreset2"><Button variant = "contained" 
                            className = "nextButton"> Next</Button></Link>
                </div>
            </div>
        </div>
    )
}