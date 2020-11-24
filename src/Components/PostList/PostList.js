import React from 'react';
import './PostList.css';
import Post from '../Post/Post';

class PostList extends React.Component{
    render(){
        return(
            <div className='postlist'>
                <div className='flipper'>
                    {this.props.posts.map(post =>{
                    return <Post post={post} key={post.id} delete={this.props.deletePost} editPost={this.props.editPost}/>
                    })}
                </div>
            </div>
        )
    }
}

export default PostList;