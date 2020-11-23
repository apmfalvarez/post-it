import React from 'react';
import './OpenPostList.css';
import Post from '../Post/Post';

class OpenPostList extends React.Component{
    render(){
        return(
            <div className='openpostlist'>
                {this.props.posts.map(post =>{
                return <Post post={post} key={post.id} delete={this.props.deletePost} editPost={this.props.editPost}/>
                })}
            </div>
        )
    }
}

export default OpenPostList;