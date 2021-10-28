import Button from "@mui/material/Button"
import "./NewPost2.css"
import { Avatar } from "@mui/material"
import { useState } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextEd from "../../components/TextEditor";
import { Link } from "react-router-dom";

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
                        <p className="postUserName">Edwards23</p>
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
                        <TextEd/>
                    </div>
                </div>

                <div className="buttonSection">
                        <Button className="draftButton" variant="contained">
                            Draft
                        </Button>
                        <Link to ="/"><Button className="postButton" variant="contained">
                            Post
                        </Button></Link>
                </div>
            </div>
            
        </div>
    )
}

export default NewPost2