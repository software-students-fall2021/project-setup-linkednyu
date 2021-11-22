// import { Button } from "../../components/Button"
//import Button from "@mui/material/Button"
import "./account.css"
// import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from 'axios'


export default function Account() {
    const url = "/userAccount"

    
    const [account, setAccount] = useState(null)
    const [loading, setIsloading] = useState(true)

    useEffect(() => {
        let isMounted = true;
        async function fetchaccount() {
            let token = localStorage.getItem('token')
            
            try {
                await axios.get(url, {headers:{'Token':token}}).then(response => {
                    if(isMounted){
                        setAccount(response.data)
                        setIsloading(false)
                    }
                    
                });
            } catch (error) {
                console.log(error)
            }

        }
        fetchaccount()
        
        return () => {isMounted=false};
    },[])





    return (
        <>
            {!loading && <div className="accountPage">
                <div className="accountHeader">
                    <h1 className="accountName">{account.username}</h1>
                </div>
                <div className="accountTop">
                    <div className="accountImage">
                        <img className="profilePicture" alt="" src="https://robohash.org/etiustodolorum.png?size=50x50&set=set1"></img>
                    </div>
                    <div className="accountBio">
                        <h2>Welcome Back!</h2>
                        <span>{account.message}</span>
                    </div>
                </div>
                <div className="accountBottom">
                    <div className="userClasses">
                        <div className="contentTitle">
                            <h2>My Classes</h2>
                        </div>
                        <div className="contentList">
                        {account.channel.map((item,index)=>{
                           return <span key={index}>{item}</span>
                            
                        })}
                        </div>
                    </div>
                    <div className="userClasses">
                        <div className="contentTitle">
                            <h2>Recent Posts</h2>
                        </div>
                        <div className="contentList">
                        {account.post.map((item,index)=>{
                           return <span key={index}>{item}</span>
                            
                        })}
                        </div>
                    </div>
                   
                </div>

            </div>}
        </>
    )
}