import React from "react"

import "./Header.css"

import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar'
import Button from '@mui/core/ButtonUnstyled'
import MaterialButton from '@mui/material/Button'




const Header = props => {
	
	const [menuShow, setMenuShow] = useState(false)

	const toggleMenu = () =>{
		setMenuShow(!menuShow);
	}

	const renderMenu = ()=>{
		if(menuShow){
			return (
				<div className = "menu">
					<div className = "menuItemGroup">
						<div className = "Menuitem">
							<MaterialButton variant = "outlined"
											size = "large">
								Home
							</MaterialButton>	
						</div>
						<div className = "Menuitem">
							<MaterialButton variant = "outlined"
											size = "large">
								New Post
							</MaterialButton>
						</div>
						<div className = "Menuitem">
							<MaterialButton variant = "outlined"
											size = "large">
								Sign in
							</MaterialButton>
						</div>
						<div className = "Menuitem">
							<MaterialButton variant = "outlined"
											size = "large">
								Sign out
							</MaterialButton>
						</div>
					</div>
				</div>
			)
		}
	}


	return (
		<nav>
			<div className = "topBarAndMenu">
				<div className="topBarContainer">
					<div className="topBarItems">
						<div className="hamburgerMenu">	
							<Button onClick = {toggleMenu}>
								<MenuIcon />
							</Button>	
						</div>
						<div className="searchBox">
							<SearchIcon className="searchIcon"/>
							<input placeholder="Search for a channel or post" className="searchInput"/>
						</div>
						<div className="avatarContainer">
							<Avatar className = "avatarIcon"
									sx={{width: 30, height:30}}>
							</Avatar>
						</div>
					</div>
				</div>
				{renderMenu()}
			</div>
			<div className = "blankbox">
				.
			</div>
		</nav>
		)
}

export default Header