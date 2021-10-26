import './joinClass.css'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

export default function joinClass(props) {
    return (
        <div className = "joinClass">
            <div className = "classTitle">
                <Avatar>CL</Avatar>
                <div className = "classTitleInstructor">
                    <div className = "className">Class Name</div>
                    <div className = "instructorName">Prof.Foo Barstein</div>
                </div>
            </div>
            <div className = "classDescription">
                <br />
                <div>
                    Class Description: Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim 
                    ad minim veniam
                </div>
                <br />
            </div>
            <div>
                <Button variant="contained" className = "joinButton">Join Class</Button>
            </div>
        </div>
    )
}