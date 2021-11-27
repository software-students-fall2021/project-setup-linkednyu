import { Button } from '../../components/Button'
import "./NewPost2.css"
import { Avatar } from "@mui/material"
import { useState } from "react";
import { useEffect } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import FileBase64 from 'react-file-base64';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const NewPost2 = ({ loggedIn }) => {
    const url = 'http://localhost:5000/userAccount'
    const [channel,setChannel] = useState({name:"Channel"})
    const [userChannels,setUserChannels] = useState([])
    let history = useHistory(); //jump to home
    let token = localStorage.getItem('token')

    const[postData, setPostData] = useState({ //local post model
        title: '',
        content: '',
        date: '',
        username: '', 
        coursename: '', 
        avatar: '',
        imgSrc: '',
    })
    
    const[loading, setIsLoading] = useState(true)


    useEffect(() => {
        let isMounted = true;
        async function fetchaccount() {
            
            try {
                await axios.get(url, {headers:{'Token':token}}).then(response => {
                    if(isMounted){
                        setPostData({
                            username: response.data.username,
                            avatar: response.data.avatar,
                        })
                        setUserChannels(response.data.channel)
                        setIsLoading(false)
                    }
                });
            } catch (error) {
                history.push('/login')
            }

        }
        fetchaccount()
        
        return () => {isMounted=false};
        // eslint-disable-next-line 
    },[])

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {  
        setAnchorEl(event.currentTarget);
    };
    const Close = ()=>{
        setAnchorEl(null);
    }
    const handleClose = (course) => {
        setChannel({name:course})
        setAnchorEl(null);
        setPostData({...postData, coursename: course})
    };


    //create date
    var today = new Date(); 


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (userChannels.length===0){
            alert('Subscribe to a channel to make a post, Use the search bar to find a channel')
            return

        }

        if(!postData.title){
            alert('please type in title')
            return
        }
            
        if(!postData.content){
            alert('please type in text')
            return

        }
            
        if(!postData.coursename){
            alert('Please select a channel')
            return

        }
            
        //send postData to server
        await axios.post('http://localhost:5000/homeposts',postData,{headers:{'Token':token}})
            .then(response=>{
                console.log("Data Sent");
            })
            .catch((err) => console.log(err.message))
        //jump back to home
        history.push('/')
    }
    
    return (
        <>
        {!loading && <div className="newPostPage">
            <div className="newPostCenter">
                <div className="postPageTitle">
                    Create a Post
                </div>
                <div className="channelAndUser">
                    <div className="channelSelect">
                        <Button className="channelButton"
                            id="basic-button"
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}>
                            {channel.name} <span className="plusSign">+</span>
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={Close}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <p className="channelNum" key={0}>{userChannels.length} {userChannels.length===1 ? "Channel" : "Channels"}</p>
                            {userChannels.length >0 && <hr/>}
                            {userChannels.map((item,index) => (
                                <MenuItem key={index+1} onClick={() =>
                                    handleClose(`${item}`)
                                }>{item}</MenuItem>
                            ))}
                        </Menu>
                    </div>
                    <div className="avatarAndUser">
                        <Avatar className="avatarIcon"
                            sx={{ width: 30, height: 30 }} src = 'https://robohash.org/etiustodolorum.png?size=50x50&set=set1' >
                        </Avatar>
                        <p className="postUserName">{postData.username}</p>
                    </div>

                </div>
                <form onSubmit = { handleSubmit }>
                <div className="titleAndContent">
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Title"
                            value={postData.title || ''}
                            onChange={(e) => setPostData({...postData, title: e.target.value})}
                        />
                    </div>
                    <div className="ckeditor">
                        <div className="textEditor">
                            <div className="editor">  
                            <CKEditor
                                editor={ClassicEditor}
                                data={postData.content}
                                onChange={(event, editor) => {
                                    const data = editor.getData()
                                    setPostData({...postData, content: data, date: today})
                                }}
                                config={ {toolbar: {items: ['heading','|','bold','italic','link','bulletedList','numberedList','|','outdent','indent','|','blockQuote','undo','redo']
                                 }}}
                            />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="buttonSection">
                    <div>
                        <p className="imgUpload">Upload an image</p>
                        <FileBase64
                        multiple={ false} 
                        onDone={ ({base64}) =>{
                            setPostData({...postData, date: today ,imgSrc:base64})
                            } }/>
                    </div> 
                    <div className="postButton">
                        <Button type = "submit"  buttonStyle="btn--dark--solid">
                            Post
                        </Button>
                    </div>
                </div>
                </form>
            </div>

        </div>}
        </>
    )
}

export default NewPost2