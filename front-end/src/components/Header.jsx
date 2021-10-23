import ImageAvatars from './Avatar'
import MenuIcon from '@mui/icons-material/Menu';
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';


export default function Header() {
	return (
		<div className="topBarContainer">
			<div className="topBarItems">
				<div className="hamburgerMenu">
					<MenuIcon className="burgerUi"/>
				</div>
				<div className="searchBox">
					<SearchIcon className="searchIcon"/>
					<input placeholder="Search for a channel or post" className="searchInput"/>
				</div>
				<div className="headerAvatar">
					<ImageAvatars size="30px" />
				</div>
			</div>
		</div>
	)
}

