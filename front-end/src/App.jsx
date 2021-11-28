import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Home from './pages/home/Home';
import JoinClass from './pages/joinClass/joinClass'
import Account from './pages/account/Account';
import Login from './pages/login/login'
import pwReset from './pages/login/pwReset'
import DetailedPost from './pages/detailedPost/DetailedPost'
import Channel from './pages/channel/Channel'
import { useState,useEffect } from 'react';
import SignUp from './pages/login/signUp';
import NewPost2 from './pages/newpost/NewPost2'
import NotFound from './pages/notfound/notFound';



function App() {
  const [loggedIn, setloggedIn] = useState(false)

  useEffect(()=>{
    let newState = localStorage.getItem('loggedIn')
    if (newState === "True"){
        setloggedIn(true)
    }
  },[])

  return (
    <BrowserRouter>
      <>
        <Header loggedIn={loggedIn} setloggedIn={setloggedIn} />
      </>
      <Switch>
        <Route path="/" exact><Home loggedIn={loggedIn} /></Route>
        <Route path="/joinclass/:id" component={JoinClass} />
        <Route path="/detailedposts/:id" component={DetailedPost} />
        <Route path="/channel/:id"> <Channel loggedIn={loggedIn} /></Route>
        <Route path="/login" > <Login loggedIn={loggedIn} setLoggedIn={setloggedIn} /> </Route>
        <Route path="/pwreset" component={pwReset} />
        <Route path="/signup"> <SignUp /> </Route>
        <Route path="/account" > <Account /></Route>
        <Route path="/newpost2" > <NewPost2 loggedIn={loggedIn} /></Route>
        <Route path="*"><NotFound/></Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
