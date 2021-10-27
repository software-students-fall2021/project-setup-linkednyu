import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NewPost from './pages/newpost/NewPost';
import joinClass from './pages/joinClass/joinClass';
import DetailedPost from './pages/detailedPost/DetailedPost';


ReactDOM.render(
  <React.StrictMode>
    <NewPost />
  </React.StrictMode>,
  document.getElementById('root')
);


