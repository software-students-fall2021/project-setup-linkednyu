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



function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
      </>
      <Switch>
        <Route exact path="/" component={Home} exact>


        </Route>
        <Route path="/newpost" component={NewPost}>

        </Route>
        <Route path="/joinclass" component={JoinClass} />

        <Route path="/joinclass" component={JoinClass} />

        <Route path="/login" component={Login} />
        <Route path="/pwreset" component={pwReset} />
        <Route path="/pwreset2" component={pwReset2} />
        <Route path="/signup" component={signUp} />


        <Route path="/account" component={Account}>

        </Route>

      </Switch>
    </BrowserRouter>

  );
}

export default App;
