import React from "react"
import "./Header.css"
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar'
import UnstyledButton from '@mui/core/ButtonUnstyled'
import { Button } from "../components/Button"
import { Link } from "react-router-dom";



const Header = ({ loggedIn, setloggedIn }) => {

	const [menuShow, setMenuShow] = useState(false)
	const [filteredData , setFilteredData] = useState([])
	const [wordEntered,setWordEntered] = useState("")
	// const [channel, setChannel]= useState("")
	// const url = "/channels"

	const data =[
		{
			name:"Mathematics",
			id: "1"
		},
		{
			name :"English",
			id : "2"
		},
		{
			name: "Literature",
			id : '3'
		},

	]

	const toggleMenu = () => {
		setMenuShow(!menuShow);
	}

	const logout = () => {
		setMenuShow(!menuShow)
		localStorage.removeItem('token')
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

	const handleFilter = (e)=>{
		const searchWord = e.target.value
		setWordEntered(searchWord)
		const newFilter = data.filter((item)=>{
			return item.name.toLowerCase().includes(searchWord.toLowerCase())
		})
		if (searchWord === ""){
			setFilteredData([])
		}
		else{
			setFilteredData(newFilter)
		}
		
	}

	const clearSearch = ()=>{
		setFilteredData([])
		setWordEntered("")
	}

	const searchResults = ()=>{
		
		return (
		<>{ 
			filteredData.length!==0 && <div className="dataResult">
			{filteredData.map((item,index)=>{
				return (
					<Link key= {index} className="dataItem" to={loggedIn?`channel/detail/${item.id}`:'/login'}>{item.name}</Link>
				);
			})}	
			</div>}
		</>
		)
		
	}

	// useEffect(() => {
    //     let isMounted = true;
    //     async function fetchchannels() {
    //         try {
    //             await axios.get(url).then(response => {
    //                 if(isMounted){
    //                     setPosts(response.data)
    //                     setIsloading(false)
    //                 }
    //             });
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     fetchposts()

    //     return () => {isMounted=false};
    // }, [url])

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
						<input placeholder="Search for a channel" value={wordEntered} className="searchInput" onChange={handleFilter} />
						{filteredData.length===0 ? <SearchIcon className="searchIcon" /> : <CloseIcon className="closeIcon" onClick={clearSearch}/>}
					</div>
					<div className="avatarContainer">
						<Link to={loggedIn ? "/account" : "/login"}>
							<Avatar onClick={() => {
								setMenuShow(false);
							}} className="avatarIcon"
								sx={{ width: 30, height: 30 }} src={loggedIn ? "https://robohash.org/etiustodolorum.png?size=50x50&set=set1" : ""}>
							</Avatar>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Header