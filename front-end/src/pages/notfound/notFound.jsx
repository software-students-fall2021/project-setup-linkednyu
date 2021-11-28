import './notFound.css'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="pageNotFound">
            <h2 className="hNotFound">404 Page Not Found</h2>
            <p className="pNotFound">Sorry , We cannot find the page you requested.</p>
            <Link to="/"><Button variant="contained" className = "returnButton">Return Home</Button></Link>
        </div>
    )
}
