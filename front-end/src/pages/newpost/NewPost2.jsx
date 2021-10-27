import Card from "@mui/material/Card"
import Button from "@mui/material/Button"
import "./NewPost2.css"

const NewPost2 = props => {
    
    return(
        <div className = "newpostpage">
            <div className = "title">
                Create a Post
            </div>
            <div className = "textbox">
                <textarea name="" id="" cols="10" rows="1" className="titletextbox">
                    Title
                </textarea>
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
            </div>
        </div>
    )
}

export default NewPost2