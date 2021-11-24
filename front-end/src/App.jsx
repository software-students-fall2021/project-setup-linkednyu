import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Home from './pages/home/Home';
import JoinClass from './pages/joinClass/joinClass'
import Account from './pages/account/Account';
import Login from './pages/login/login'
import pwReset from './pages/login/pwReset'
import pwReset2 from './pages/login/pwReset2'
import DetailedPost from './pages/detailedPost/DetailedPost'
import Channel from './pages/channel/Channel'
import { useState } from 'react';
import SignUp from './pages/login/signUp';
import NewPost2 from './pages/newpost/NewPost2'



function App() {
  const [loggedIn, setloggedIn] = useState(false)

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
        <Route path="/pwreset2" component={pwReset2} />
        <Route path="/signup"> <SignUp /> </Route>
        <Route path="/account" > <Account /></Route>
        <Route path="/newpost2" > <NewPost2 loggedIn={loggedIn} /></Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
