import logo from '../../logo.png';
import './App.css';
import React from 'react';
import PostList from '../PostList/PostList';
import Postit from '../../utils/postit';
import NewPost from '../NewPost/NewPost'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      posts : [{title: 'lalala', content: 'lololo', key:1},{title: 'yabadabadoo', content: 'skkkkkkraaaaaaa', key:2}],
    };
    this.create = this.create.bind(this);
    this.getPosts = this.getPosts.bind(this);
  }

  create(title,content){
    const currentPosts = this.state.posts;
    const newPost = {title: title, content: content};
    currentPosts.unshift(newPost);
    this.setState({posts: currentPosts});
  }

  getPosts(){
    Postit.getPosts()
    .then(posts => this.state.posts = posts)
  }

  render(){
    return (
      <div className="App">
        <header>
          <a href='#top'><img src={logo} alt='logo' /></a>
          <h1>Post.it</h1>
        </header>
        <section className='content'>
          <NewPost create={this.create}/>
          <PostList posts={this.state.posts}/>
        </section>
      </div>
    );
  }
}

export default App;