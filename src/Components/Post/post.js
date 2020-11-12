import React from 'react';
import logo from '../../logo.png';

class Post extends React.Component{
    render(){
        return(
            <div className='post'>
              <img src={logo} className='postimg'/>
              <div className='postinfo'>
                <h2>Post Title</h2>
                <button className='showcommentsbutton'>SHOW</button>
              </div>
            </div>
        )
    }
}

export default Post;