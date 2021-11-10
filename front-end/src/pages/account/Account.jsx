// import { Button } from "../../components/Button"
//import Button from "@mui/material/Button"
import "./account.css"
// import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from 'axios'
import { useParams } from "react-router"

export default function Account({ setloggedIn }) {
    const { id } = useParams()
    const url = "/account/:id"

    const [account, setAccount] = useState(null)
    const [loading, setIsloading] = useState(true)

    useEffect(() => {
        async function fetchaccount() {
            try {
                await axios.get(url).then(response => {
                    for (let i = 0; i < response.data.length; i++) {
                        if (response.data[i]['id'].toString() === id.toString()) {
                            setAccount(response.data[i])
                            break
                        }
                    }
                    setIsloading(false)
                });
            } catch (error) {
                console.log(error)
            }

        }
        fetchaccount()
    }, [id])


    return (
        <>
            {!loading && <div className="accountPage">
                <div className="accountHeader">
                    <h1 className="accountName">{account.userName}</h1>
                </div>
                <div className="accountTop">
                    <div className="accountImage">
                        <img className="profilePicture" alt="" src={account.avatar}></img>
                    </div>
                    <div className="accountBio">
                        <h2>Bio</h2>
                        <span>Hi! I'm a typical NYU student taking classes and having a great time yay.</span>
                    </div>
                </div>
                <div className="accountBottom">
                    <div className="userClasses">
                        <div className="contentTitle">
                            <h2>My Classes</h2>
                        </div>
                        <div className="contentList">
                            <span>Class 1</span>

                            <span>Class 2</span>
                            <span>Class 3</span>
                        </div>
                    </div>
                    <div className="userClasses">
                        <div className="contentTitle">
                            <h2>Recent Posts</h2>
                        </div>
                        <div className="contentList">
                            <span>Post 1</span>

                            <span>Post 2</span>
                            <span>Post 3</span>
                        </div>
                    </div>
                    {/* <div className="logoutButton">
                        <Link to="/">
                            <Button onClick={() => {
                                setloggedIn(false)
                            }}
                                buttonSize="btn--large"
                            > Logout  </Button>
                        </Link>
                    </div> */}
                </div>

            </div>}
        </>
    )
}