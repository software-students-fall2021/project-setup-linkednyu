import React from "react"
import "./Header.css"
import { useState, useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar'
import UnstyledButton from '@mui/core/ButtonUnstyled'
import { Button } from "../components/Button"
import { Link } from "react-router-dom";
import axios from "axios";



const Header = ({ loggedIn, setloggedIn , picChange }) => {

	const [menuShow, setMenuShow] = useState(false)

	const [filteredData, setFilteredData] = useState([])
	const [wordEntered, setWordEntered] = useState("")
	const [data, setData] = useState([])
	const url = process.env.REACT_APP_API_URL + "/channels"


	const accounturl = "http://localhost:5000/userAccount"
	const [account, setAccount] = useState(undefined)
	const [loading, setIsloading] = useState(true)


	useEffect(() => {
		let isMounted = true;
		async function fetchaccount() {
			let token = localStorage.getItem('token')

			try {
				await axios.get(accounturl, { headers: { 'Token': token } }).then(response => {
					if (isMounted) {
						setAccount(response.data)
					}
				});
			} catch (error) {
				console.log(error);
			}

		}
		fetchaccount()
		return () => { isMounted = false };
		// eslint-disable-next-line 
	}, [loggedIn,picChange])

	useEffect(() => {
		if (account !== undefined) {
			setIsloading(false);
		}
		// eslint-disable-next-line 
	}, [account])

	useEffect(() => {
		let isMounted = true;
		async function fetchchannel() {
			let token = localStorage.getItem('token')
			try {
				await axios.get(url, { headers: { 'Token': token } }).then(response => {
					if (isMounted) {
						setData(response.data)
					}

				});
			} catch (error) {
				console.log(error);
			}

		}
		fetchchannel()
		return () => { isMounted = false };
		// eslint-disable-next-line 
	}, [loggedIn,picChange])


	const toggleMenu = () => {
		setMenuShow(!menuShow);
	}

	const logout = () => {
		setMenuShow(!menuShow)
		localStorage.removeItem('token')
		localStorage.removeItem('loggedIn')
		setloggedIn(false)
		setData([])

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
						{(data.role === 'professor') && <div className="Menuitem">
							<Link to="/createclass">
								<Button onClick={toggleMenu} buttonStyle="btn--primary--outline"
									buttonSize="btn--large--fixed">
									Create Class
								</Button>
							</Link>
						</div>}
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

	const handleFilter = (e) => {
		const searchWord = e.target.value
		setWordEntered(searchWord)
		const newFilter = data.filter((item) => {
			return item.name.toLowerCase().includes(searchWord.toLowerCase())
		})
		if (searchWord === "") {
			setFilteredData([])
		}
		else {
			setFilteredData(newFilter)
		}

	}

	const clearSearch = () => {
		setFilteredData([])
		setWordEntered("")
	}

	const searchResults = () => {

		return (
			<>{
				filteredData.length !== 0 && <div className="dataResult">
					{filteredData.map((item, index) => {
						return (
							<Link key={index} onClick={clearSearch} className="dataItem" to={loggedIn ? `/joinclass/${item.name}` : '/login'}>{item.name}</Link>
						);
					})}
				</div>}
			</>
		)

	}


	return (
		<nav>
			{renderMenu()}
			{searchResults()}
			<div className="topBarContainer">
				<div className="topBarItems">
					<div className="hamburgerMenu">
						<UnstyledButton onClick={toggleMenu}>
							<MenuIcon className="menuIcon" />
						</UnstyledButton>
					</div>
					<div className="searchBox">
						<input placeholder="Search for channel details" value={wordEntered} className="searchInput" onChange={handleFilter} />
						{filteredData.length === 0 ? <SearchIcon className="searchIcon" /> : <CloseIcon className="closeIcon" onClick={clearSearch} />}
					</div>
					<div className="avatarContainer">
						<Link to={loggedIn ? "/account" : "/login"}>
							<Avatar onClick={() => {
								setMenuShow(false);
							}} className="avatarIcon"
								sx={{ width: 30, height: 30 }} src={loggedIn && !loading ? account.profile : ""}>
							</Avatar>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Header