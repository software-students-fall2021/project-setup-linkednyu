import { Button } from '../../components/Button'
import "./NewPost2.css"
import { Avatar } from "@mui/material"
import { useState } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from "html-react-parser"
import { Link } from "react-router-dom";
import axios from 'axios'


const NewPost2 = ({ loggedIn }) => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("")
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    var count = Math.floor(Math.random()*(100-20)+20)


    const onPost = (e) => {
        

        if (!text || !title) {
            e.preventDefault()
            alert('please add a Title or Content')
            return
        }
        
        var content = parse(text).props.children;
        const posts = {
            "id": count,
            "avatar": "https://robohash.org/utanimioccaecati.png?size=50x50&set=set1",
            "userName": "Adonis",
            "courseName": "Mathematics",
            "date": today,
            "title": title,
            "content":content,
            "comments": [],
            "imgSrc": "https://picsum.photos/id/1000/5626/3635"
        };




        axios.post('http://localhost:5000/homeposts',posts).then(response=>{
            console.log(response);
        });
        

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
                <div className="titleAndContent">
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="ckeditor">
                        <div className="textEditor">
                            <div className="editor">
                                <CKEditor
                                editor={ClassicEditor}
                                data={text}
                                onChange={(event, editor) => {
                                    const data = editor.getData()
                                    setText(data)
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
                    <Link to="/"><Button onClick={onPost} className="postButton" buttonStyle="btn--dark--solid">
                        Post
                    </Button></Link>
                </div>
            </div>

        </div>
    )
}

export default NewPost2