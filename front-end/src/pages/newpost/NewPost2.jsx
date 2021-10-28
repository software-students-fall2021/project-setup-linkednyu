import Button from "@mui/material/Button"
import "./NewPost2.css"
import { Avatar } from "@mui/material"
import { useState } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const NewPost2 = ({loggedIn}) => {
    const [title, setTitle] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    
    
    return(
        <div className = "newPostPage">
            <div className="newPostCenter">
                <div className = "postPageTitle">
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
                        <Avatar className = "avatarIcon"
                                        sx={{width: 30, height:30}} src={loggedIn ? "https://picsum.photos/200": ""}>
                        </Avatar>
                        <p className="postUserName">Heyyrrrrrrrr</p>
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

                    <div className="draftJs">

                    </div>

                </div>
                {/* <div className = "textbox">
                    <textarea placeholder="Title" name="" id="" cols="10" rows="1" className="titletextbox"></textarea>
                    <div className = "postcontrol">
                        <Button variant="contained">
                            channel +
                        </Button>
                        <Button variant="contained">
                            Add video or image
                        </Button>
                    </div>
                    <div>
                        <textarea name="" id="" cols="30" rows="10" className = "textarea">
                        </textarea>
                    </div>
                    <div className = "commitbutton">
                        <Button variant="contained">
                            Draft
                        </Button>
                        <Button variant="contained">
                            Post
                        </Button>
                    </div>
                </div> */}
            </div>
            
        </div>
    )
}

export default NewPost2