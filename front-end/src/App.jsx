import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Home from './pages/home/Home';
import NewPost from './pages/newpost/NewPost';
import JoinClass from './pages/joinClass/joinClass'



function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
      </>
      <Switch>
        <Route exact path="/" component={Home}>

        </Route>
        <Route path="/newpost" component={NewPost}>

        </Route>
        <Route path="/joinclass" component={JoinClass} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
