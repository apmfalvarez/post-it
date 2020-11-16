import logo from '../../logo.png';
import './App.css';
import React from 'react';
import PostList from '../PostList/PostList';
import Postit from '../../utils/postit';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      posts : [{title: 'lalala', content: 'lololo'},{title: 'yabadabadoo', content: 'skkkkkkraaaaaaa'}],
      newPostTitle: '',
      newPostContent: '',
      posting: false
    }
  }/*
  componentWillMount(){
    const posts = Postit.getPosts;
    this.setState({posts: posts});
  }*/
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
          <PostList posts={this.state.posts}/>
        </section>
      </div>
    );
  }
}

export default App;