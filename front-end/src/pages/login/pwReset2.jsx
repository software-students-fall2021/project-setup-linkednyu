import "./pwReset2.css"
import Button from '@mui/material/Button'
import {Link} from 'react-router-dom'

export default function pwReset2(props){
    return(
        <div className = "resetResultPage">
             <div className = "title">
                We have sent the reset link to your email address. 
            </div>
            <div className = "nextButtonArea">
                    <Link to="/login"><Button variant = "contained" 
                            className = "nextButton"
                            > Return</Button></Link>
            </div>
        </div>
    )
}