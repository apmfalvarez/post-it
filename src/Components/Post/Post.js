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
                <button className='showcontentbutton' onClick={this.showAndHide}>{this.state.hidden? 'SHOW' : 'HIDE'}</button>
                <h2>{this.props.post.title}</h2>
              </div>
              {
                this.state.hidden? null : 
                <div className='postcontent'>
                  {this.props.post.content.map((line)=>{return <p>{line}</p>})}
                </div>
              }
            </div>
        )
    }
}

export default Post;