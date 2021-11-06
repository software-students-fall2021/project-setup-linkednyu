import { Button } from '../../components/Button'
import "./NewPost2.css"
import { Avatar } from "@mui/material"
import { useState } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//import parse from "html-react-parser"
import "../../components/texteditor.css"
import axios from 'axios';

const NewPost2 = ({ loggedIn }) => {
    const [postData, setNewPost] = useState({
        title: '',
        text: '',
        userName: '',
        courseName: '',
        time: '',
        isDraft: false,
    })
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        //setNewPost({...postData, courseName: courseName})
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:4000/posts", postData)
        console.log(postData)
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
                        <p className="postUserName">Edwards23</p>
                    </div>

                </div>

                <form onSubmit = { handleSubmit }>
                <div className="titleAndContent">
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Title"
                            value={postData.title}
                            onChange={(e) => setNewPost({...postData, title: e.target.value})}
                        />
                    </div>

                    <div className="ckeditor">
                        <div className="editor">
                            <CKEditor
                                editor={ClassicEditor}
                                data={postData.text}
                                onChange={(e, editor) => {
                                    const data = editor.getData()
                                    setNewPost({...postData, text: data})
                                    console.log(data)
                                    console.log(postData)
                                }}
                            />
                        </div>
                    </div>

                </div>

                <div className="buttonSection">
                    <Button className="draftButton" onClick = {() => {
                        alert('Draft saved')
                        setNewPost({...postData, isDraft: true})
                    }}>
                        Draft
                    </Button>
                    <Button className="postButton" type = "submit" buttonStyle="btn--dark--solid">
                        Post
                    </Button>
                </div>
                </form>

            </div>
        </div>
    )
}

export default NewPost2