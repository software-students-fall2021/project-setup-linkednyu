import "./editAccount.css"
import { useState, useEffect } from "react"
import axios from 'axios'
import { useHistory } from "react-router"
import FileBase64 from 'react-file-base64';


export default function EditAccount() {
    const History = useHistory()
    let token = localStorage.getItem('token')
    //console.log(token)

    //connect to backend
    const accounturl = "http://localhost:5000/userAccount"
    const [account, setAccount] = useState(undefined)
    const [loading, setIsloading] = useState(true)
    const [newInfo, setInfo] = useState({
        // name: account.name,
        // username: account.username,
        // email: account.email,
        // password: account.password,
        // channel: account.channel,
        // date: account.date,
        profile: '',
        info: '',
        message: ''
    })

    const onUpdate = async (e) => {
        e.preventDefault()


        // if (!newComment.content) {
        //     alert('please add a comment')
        //     return
        // }

        await axios.post(`http://localhost:5000/editaccount`, newInfo, { headers: { 'Token': token } }).then(response => {
            console.log("sent");
        })
            .catch((err) => console.log(err.message));


        async function fetchaccount() {
            let token = localStorage.getItem('token')

            try {
                await axios.get(accounturl, { headers: { 'Token': token } }).then(response => {

                    setAccount(response.data)


                });
            } catch (error) {
                History.push('/login')
            }

        }
        fetchaccount()
        setInfo({
            profile: account.profile,
            info: account.info,
            message: account.message
        })

    }

    useEffect(() => {
        let isMounted = true;
        async function fetchaccount() {
            let token = localStorage.getItem('token')

            try {
                await axios.get(accounturl, { headers: { 'Token': token } }).then(response => {
                    if (isMounted) {
                        setAccount(response.data)
                    }
                });
            } catch (error) {
                History.push('/login')
            }

        }
        fetchaccount()
        return () => { isMounted = false };
        // eslint-disable-next-line 
    }, [])

    useEffect(() => {
        if (account !== undefined) {
            setInfo({
                profile: account.profile,
                info: account.info,
                message: account.message
            })
            setIsloading(false);
        }
        // eslint-disable-next-line 
    }, [account])

    return (
        <>
            {loading && < div className="landing" >
                <h1>Linked NYU</h1></div>}
            {!loading && <div className="accountPage">
                <div className="accountWrapper">
                    <div className="accountHeader">
                        <h1 className="accountName">{account.name}</h1>
                    </div>
                    <div className="accountBio">
                        <form className="accountBioForm" onSubmit={onUpdate}>
                            <div class="profile-pic-div">
                                <img src={newInfo.profile} alt="profile img" id="photo" />
                                <FileBase64 id="file"
                                    multiple={false}
                                    onDone={({ base64 }) => {
                                        setInfo({ ...newInfo, profile: base64 })
                                    }} />
                                <label for="file" id="uploadBtn"> Choose Photo</label>
                            </div>
                            <label className="accountInfo">
                                Info
                                <input type="text" value={newInfo.info} onChange={(e) => setInfo({ ...newInfo, info: e.target.value })} />
                            </label>
                            <label className="accountMessage">
                                Message
                                <input type="text" value={newInfo.message} onChange={(e) => setInfo({ ...newInfo, message: e.target.value })} />
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
            }
        </>
    )
}


