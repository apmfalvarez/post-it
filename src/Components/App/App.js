import logo from '../../logo.png';
import './App.css';
import React from 'react';
import Post from '../Post/post'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header>
          <a href='#top'><img src={logo} alt='logo' /></a>
          <h1>Post.it</h1>
        </header>
        <section className='content'>
          <div id='#newpost'>
            <button className="newpostbutton">NEW POST</button>
          </div>
          <div className='postlist'>
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </section>
      </div>
    );
  }
}

export default App;