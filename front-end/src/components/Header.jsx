import React from "react"
import "./Header.css"
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar'
import Button from '@mui/core/ButtonUnstyled'
import MaterialButton from '@mui/material/Button'
import { Link } from "react-router-dom";



const Header = ({loggedIn ,setloggedIn}) => {
	
	const [menuShow, setMenuShow] = useState(false)

	const toggleMenu = () =>{
		setMenuShow(!menuShow);
	}

	const logout = ()=>{
		setMenuShow(!menuShow)
		setloggedIn(false)

	}

	const renderMenu = ()=>{
		if(menuShow){
			return (
				<div className = "menu">
					<div className = "menuItemGroup">
						<div className = "Menuitem">
							<Link to="/">
								<MaterialButton onClick={toggleMenu} variant = "outlined"
												size = "large">
									Home
								</MaterialButton>	
							</Link>
						</div>
						{loggedIn && <div className = "Menuitem">
							<Link to= "/" >
								<MaterialButton onClick={toggleMenu} variant = "outlined"
												size = "large">
									New Post
								</MaterialButton>
							</Link>
						</div>}
						<div className = "Menuitem">
							<Link to ="/login">
								<MaterialButton onClick={toggleMenu} variant = "outlined"
												size = "large">
									Sign in
								</MaterialButton>
							</Link>
						</div>
						<div className = "Menuitem">
						<Link to ="/">
							<MaterialButton onClick={logout} variant = "outlined"
											size = "large">
								Sign out
							</MaterialButton>
						</Link>
						</div>
					</div>
				</div>
			)
		}
	}

	return (
		<nav>
			{renderMenu()}
			<div className="topBarContainer">
				<div className="topBarItems">
					<div className="hamburgerMenu">	
						<Button onClick = {toggleMenu}>
							<MenuIcon className="menuIcon" />
						</Button>	
					</div>
					<div className="searchBox">
						<SearchIcon className="searchIcon"/>
						<input placeholder="Search for a channel or post" className="searchInput"/>
					</div>
					<div className="avatarContainer">
						<Link to={loggedIn ? "/account" : "/" } onClick={ !loggedIn ?(event) => event.preventDefault():"" }>
							<Avatar onClick={()=>{
								setMenuShow(false);
							}} className = "avatarIcon"
									sx={{width: 30, height:30}} src={loggedIn ? "https://picsum.photos/200": ""}>
							</Avatar>
						</Link>
					</div>
				</div>
			</div>
		</nav>
		)
}

export default Header