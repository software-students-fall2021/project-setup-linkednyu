import { Button } from '../../components/Button'
import "./NewPost2.css"
import { Avatar } from "@mui/material"
import { useState } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useHistory } from "react-router-dom";
import axios from 'axios'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "../../components/texteditor.css"

const NewPost2 = ({ loggedIn }) => {
    const [postData, setNewPost] = useState({
        id: '',
        title: '',
        text: '',
        userName: 'Edward23',
        courseName: '',
        date: '',
        isDraft: false,
        imgSrc: '',
        avatar: 'https://picsum.photos/200',
    })
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const history = useHistory()
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        //setNewPost({...postData, courseName: courseName})
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        //setNewPost({...postData, id: ttlCount})
        axios.post('http://localhost:5000/homeposts', postData)
        history.push("/")
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
                            sx={{ width: 30, height: 30 }} src={loggedIn ? postData.avatar : ""}>
                        </Avatar>
                        <p className="postUserName">Edwards23</p>
                    </div>

                </div>
                <form onSubmit = {handleSubmit}>
                <div className="titleAndContent">
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Title"
                            value={postData.title}
                            onChange={(e) => setNewPost({...postData, title: e.target.value}) }
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
                                }}
                            />
                        </div>
                    </div>
                </div>
                
                <div className="buttonSection">
                    <Button className="draftButton" onClick = { () => {
                        setNewPost({...postData, isDraft: true})
                        alert('Draft Saved.')
                    }}>
                        Draft
                    </Button>
                    <Button className="postButton" buttonStyle="btn--dark--solid" type = "submit">
                        Post
                    </Button>
                </div>
                </form>
            </div>

        </div>
    )
}

export default NewPost2