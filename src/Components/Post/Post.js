import React from 'react';
import postit from './postit.png';
import './Post.css';

class Post extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        hidden: true
      };
      this.showAndHide = this.showAndHide.bind(this);
  }
  showAndHide(){
    this.state.hidden? this.setState({hidden:false}) : this.setState({hidden: true});
  }
    render(){
        return(
            <div className='post'>
              <div className='postinfo'>
                <button className='showcommentsbutton' onClick={this.showAndHide}>{this.state.hidden? 'SHOW' : 'HIDE'}</button>
                <h2>{this.props.post.title}</h2>
              </div>
              {this.state.hidden? null : <h3 className='postcontent'>{this.props.post.content}</h3>}
            </div>
        )
    }
}

export default Post;