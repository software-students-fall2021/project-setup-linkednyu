import "./pwRest.css"
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useState } from "react"
import axios from "axios"
import { useHistory } from "react-router"

export default function PwReset(props) {
    const [message, setMessage] = useState("")
    const [mStyle, setmStyle] = useState("")
    const [email, setEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confPassword, setConfPassword] = useState("")
    const history = useHistory()


    const resetPassword = async (e) => {

        if (!email || !newPassword || !confPassword) {
            e.preventDefault()
            setmStyle("messageShow")
            setMessage("Email or new password fields are missing!")
            setTimeout(() => {
                setmStyle("")
                setMessage("")
            }, 4000);
            return
        }

        if (newPassword !== confPassword) {
            e.preventDefault()
            setmStyle("messageShow")
            setMessage("Password fields do not match!")
            setTimeout(() => {
                setmStyle("")
                setMessage("")
            }, 4000);
            return
        }

        const resetDetails = {
            email: email,
            newPassword: newPassword
        }

        try {
            const res = await axios.post('/api/reset', resetDetails)
            console.log('here 1');
            if (res.status === 200) {
                console.log(res.status)
                console.log('here 5');
                setmStyle("messageShow")
                setMessage(res.data.message)
                setTimeout(() => {
                    setmStyle("")
                    setMessage("")
                    history.push('/login')
                }, 1500)

            }

        } catch (error) {
            console.log('here 2');
            e.preventDefault()
            setmStyle("messageShow")
            console.log(error.response.data.message);
            setMessage(error.response.data.message)
            setTimeout(() => {
                setmStyle("")
                setMessage("")
            }, 4000);

        }

    }

    return (
        <div className="pwResetPage">
            <div className="signinTitle">
                <div className="title">
                    Forgot your password?
                </div>
                <div className="subTitle">
                    Don't worry, we got you.
                </div>
            </div>
            <div className="inputArea">
                <div>
                    <label htmlFor="email"> Email </label>
                    <TextField variant="outlined"
                        required
                        value={email}
                        id="email"
                        onChange={(e) => { setEmail(e.target.value) }}
                        className="emailInput"></TextField>
                </div>

                <div className='passwordField'>
                    <label htmlFor="newpassword"> New Password </label>
                    <TextField variant="outlined"
                        type="Password"
                        required
                        value={newPassword}
                        id="newpassword"
                        onChange={(e) => { setNewPassword(e.target.value) }}
                        className="passwordInput"></TextField>
                </div>
                <div className="passwordConfirm">
                    <label htmlFor="confirmpassword"> Confirm New Password</label>
                    <TextField variant="outlined"
                        type="Password"
                        required
                        value={confPassword}
                        id="confirmpassword"
                        onChange={(e) => { setConfPassword(e.target.value) }}
                        className="passwordInput"></TextField>
                </div>
                <div className={mStyle}>
                    <p className="errMessage">{message}</p>
                </div>

                <div className="nextButtonArea">
                    <Button onClick={resetPassword} variant="contained"
                        className="nextButton">Reset</Button>
                </div>
            </div>
        </div>
    )
}