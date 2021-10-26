import "./pwReset2.css"
import Button from '@mui/material/Button'

export default function pwReset2(props){
    return(
        <div className = "resetResultPage">
             <div className = "title">
                We have sent the reset link to your email address. 
            </div>
            <div className = "nextButtonArea">
                    <Button variant = "contained" 
                            className = "nextButton"
                            href = "/login"> Return</Button>
            </div>
        </div>
    )
}