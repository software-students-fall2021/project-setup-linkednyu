import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Home from './pages/home/Home';
import NewPost from './pages/newpost/NewPost';
import Account from './pages/account/Account';



function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
      </>
      <Switch>
        <Route path="/" component={Home}>

        </Route>
        <Route path="/newpost" component={NewPost}>

        </Route>

        <Route path="/account" component={Account}>

        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
