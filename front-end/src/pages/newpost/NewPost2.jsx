import { Button } from '../../components/Button'
import "./NewPost2.css"
import { Avatar } from "@mui/material"
import { useState } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
//import { post } from '../../../../back-end/app';

const NewPost2 = ({ loggedIn }) => {
    const[postData, setPostData] = useState({
        title: '',
        text: '',
        date: '',
        userName: '',
        courseName: '',
        avatar: '',
        imgSrc: '',
    })
    
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    let history = useHistory();

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    var randomId = Math.floor(Math.random()*(100-20)+20)

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log('submit')

        if(!postData.title)
            alert('please type in title')
        if(!postData.text)
            alert('please type in text')

        setPostData({...postData, id: randomId})

        axios.post('http://localhost:4000/homeposts',postData)
            .then(response=>{
                console.log(response);
            })
            .catch((err) => console.log(err.message))
        
        history.push('/')
    }
    
    return (
        <div className="newPostPage">
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
                            Channel <span className="plusSign">+</span>
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Mathematics</MenuItem>
                            <MenuItem onClick={handleClose}>Engineering</MenuItem>
                            <MenuItem onClick={handleClose}>English</MenuItem>
                        </Menu>
                    </div>
                    <div className="avatarAndUser">
                        <Avatar className="avatarIcon"
                            sx={{ width: 30, height: 30 }} src={loggedIn ? "https://picsum.photos/200" : ""}>
                        </Avatar>
                        <p className="postUserName">Adonis</p>
                    </div>

                </div>
                <form onSubmit = { handleSubmit }>
                <div className="titleAndContent">
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Title"
                            value={postData.title}
                            onChange={(e) => setPostData({...postData, title: e.target.value})}
                        />
                    </div>
                    <div className="ckeditor">
                        <div className="textEditor">
                            <div className="editor">
                                <CKEditor
                                editor={ClassicEditor}
                                data={postData.text}
                                onChange={(event, editor) => {
                                    const data = editor.getData()
                                    setPostData({...postData, text: data})
                                }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="buttonSection">
                    <Button className="draftButton" onClick = {() => alert('Draft saved')}>
                        Draft
                    </Button>
                    <Button type = "submit" className="postButton" buttonStyle="btn--dark--solid">
                        Post
                    </Button>
                </div>

                </form>
            </div>

        </div>
    )
}

export default NewPost2