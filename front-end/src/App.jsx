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
import signUp from './pages/login/signUp'
import DetailedPost from './pages/detailedPost/DetailedPost'



function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
      </>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/newpost" component={NewPost}/>
        <Route path="/joinclass" component={JoinClass} />
        <Route path="/detailedpost" component={DetailedPost}/>
        
        <Route path="/login" component={Login} />
        <Route path="/pwreset" component={pwReset} />
        <Route path="/pwreset2" component={pwReset2} />
        <Route path="/signup" component={signUp} />
        <Route path="/account" component={Account} />

      </Switch>
    </BrowserRouter>

  );
}

export default App;
