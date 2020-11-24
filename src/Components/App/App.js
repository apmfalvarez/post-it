import logo2 from '../../logo2.png';
import './App.css';
import React from 'react';
import PostList from '../PostList/PostList';
import OpenPostList from '../OpenPostList/OpenPostList';
import Postit from '../../utils/postit';
import NewPost from '../NewPost/NewPost'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      posts : [],
    };
    this.create = this.create.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.editPost = this.editPost.bind(this);
  }

  create(title,content){
    const currentPosts = this.state.posts;
    const newPost = {title: title, content: content};
    Postit.addPost(newPost)
    .then(post =>{
      currentPosts.unshift(post);
      this.setState({posts: currentPosts});
    })
    .catch(error => {return});
  }
  deletePost(post){
    const currentPosts = this.state.posts;
    Postit.deletePost(post)
    .then(deleted=>{
      const newPosts = currentPosts.filter(i => i !== deleted);
      console.log('lalalala')
      this.setState({posts: newPosts});
    })
    .catch(error => {return});
  }
  editPost(post){
    const posts = this.state.posts;
    const oldPost = posts.find(i => i.id === post.id);
    const postIdx = posts.indexOf(oldPost);
    Postit.editPost(post)
    .then(edited=>{
      posts.splice(postIdx, 1, edited);
      this.setState({posts: posts});
    })
  }

  componentDidMount(){
    Postit.getPosts()
    .then(posts => this.setState({posts:posts}))
  }

  render(){
    return (
      <div className="App">
        <header>
          <a href='#top'><img src={logo2} alt='logo' />
          <h1>Pin.it</h1></a>
        </header>
        <div className='container'>
          <span className='content'>
            <div className='flipper'>
            <NewPost create={this.create}/>
            <PostList posts={this.state.posts.filter(post=> post.is_open === 0)} deletePost={this.deletePost} editPost={this.editPost}/>
            </div>
          </span>
          <span className='openposts'>
            <OpenPostList posts={this.state.posts.filter(post=> post.is_open === 1)} deletePost={this.deletePost} editPost={this.editPost}/>
          </span>
        </div>
      </div>
    );
  }
}

export default App;