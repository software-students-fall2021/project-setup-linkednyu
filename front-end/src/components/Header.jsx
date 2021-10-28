import React from "react"
import "./Header.css"
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar'
import UnstyledButton from '@mui/core/ButtonUnstyled'
import { Button } from "../components/Button"
import { Link } from "react-router-dom";



const Header = ({ loggedIn, setloggedIn }) => {

	const [menuShow, setMenuShow] = useState(false)

	const toggleMenu = () => {
		setMenuShow(!menuShow);
	}

	const logout = () => {
		setMenuShow(!menuShow)
		setloggedIn(false)

	}

	const renderMenu = () => {
		if (menuShow) {
			return (
				<div className="menu">
					<div className="menuItemGroup">
						<div className="Menuitem">
							<Link to="/">
								<Button onClick={toggleMenu} buttonStyle="btn--primary--outline"
									buttonSize="btn--large--fixed">
									Home
								</Button>
							</Link>
						</div>
						{loggedIn && <div className="Menuitem">
							<Link to="/newpost2" >
								<Button onClick={toggleMenu} buttonStyle="btn--primary--outline"
									buttonSize="btn--large--fixed">
									New Post
								</Button>
							</Link>
						</div>}
						{
							!loggedIn && <div className="Menuitem">
								<Link to="/login">
									<Button onClick={toggleMenu} buttonStyle="btn--dark--outline"
										buttonSize="btn--large--fixed">
										Sign in
									</Button>
								</Link>
							</div>
						}

						{
							loggedIn && <div className="Menuitem">
								<Link to="/">
									<Button onClick={logout} buttonStyle="btn--primary--outline"
										buttonSize="btn--large--fixed">
										Sign out
									</Button>
								</Link>
							</div>
						}

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
						<UnstyledButton onClick={toggleMenu}>
							<MenuIcon className="menuIcon" />
						</UnstyledButton>
					</div>
					<div className="searchBox">
						<SearchIcon className="searchIcon" />
						<input placeholder="Search for a channel or post" className="searchInput" />
					</div>
					<div className="avatarContainer">
						<Link to={loggedIn ? "/account" : "/"} onClick={!loggedIn ? (event) => event.preventDefault() : ""}>
							<Avatar onClick={() => {
								setMenuShow(false);
							}} className="avatarIcon"
								sx={{ width: 30, height: 30 }} src={loggedIn ? "https://picsum.photos/200" : ""}>
							</Avatar>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Header