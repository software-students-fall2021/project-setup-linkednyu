import "./editAccount.css"
import { useState, useEffect } from "react"
import axios from 'axios'
import { useHistory } from "react-router"
import FileBase64 from 'react-file-base64';


export default function EditAccount({picChange , setpicChange }) {
    const History = useHistory()
    let token = localStorage.getItem('token')

    //connect to backend
    const accounturl = "http://localhost:5000/userAccount"
    const [account, setAccount] = useState(undefined)
    const [loading, setIsloading] = useState(true)
    const [newInfo, setInfo] = useState({
        profile: '',
        info: '',
        message: ''
    })

    const onUpdate = async (e) => {
        e.preventDefault()

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
        setpicChange(()=>{
            return !picChange
        })
        History.push('/account')

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
            {!loading && <div className="editaccountPage">
                <div className="accountWrapper">
                    <div className="accountHeader">
                        <h1 className="accountName">{account.name}</h1>
                    </div>
                    <div className="accountBio">
                        <div className="accountBioForm" >
                            <div className="profile-pic-div">
                                <img src={newInfo.profile} alt="profile img" id="photo" />
                                <div id="file">
                                    <FileBase64 
                                        multiple={false}
                                        onDone={({ base64 }) => {
                                            setInfo({ ...newInfo, profile: base64 })
                                        }} />
                                </div>
                            </div>
                            <div className="accountInfo">
                                <p className="inputHeader">Info</p>
                                <input type="text" value={newInfo.info} onChange={(e) => setInfo({ ...newInfo, info: e.target.value })} />
                            </div>
                            <div className="accountMessage">
                                <p className="inputHeader">Message</p>
                                <textarea type="text" value={newInfo.message} onChange={(e) => setInfo({ ...newInfo, message: e.target.value })} />
                            </div>
                            <input type="button" value="Submit" onClick={onUpdate} />
                        </div>
                    </div>
                </div>
            </div>
            }
        </>
    )
}


