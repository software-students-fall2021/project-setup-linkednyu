import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Home from './pages/home/Home';
import NewPost from './pages/newpost/NewPost';
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
  const [loggedIn,setloggedIn] = useState(false)

  return (
    <BrowserRouter>
      <>
        <Header loggedIn={loggedIn} setloggedIn={setloggedIn}/>
      </>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/newpost" component={NewPost}/>
        <Route path="/joinclass" component={JoinClass} />
        <Route path="/detailedpost" component={DetailedPost}/>
        <Route path="/channel/:id" component={Channel}/>
        <Route path="/login" > <Login setLoggedIn={setloggedIn}/> </Route>
        <Route path="/pwreset" component={pwReset} />
        <Route path="/pwreset2" component={pwReset2} />
        <Route path="/signup"> <SignUp setLoggedIn={setloggedIn} /> </Route>
        <Route path="/account" > <Account setloggedIn={setloggedIn} /></Route>
        <Route path="/newpost2" component={NewPost2}/>

      </Switch>
    </BrowserRouter>

  );
}

export default App;
