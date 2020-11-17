import React from 'react';
import './Post.css';

class Post extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        hidden: true,
        post: this.props.post
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
                  <div className='postbuttonscontainer'>
                    <button>Edit</button>
                    <button>Delete</button>
                  </div>
                  {this.props.post.content.split('\n').map((line)=>{return <p>{line}</p>})}
                </div>
              }
            </div>
        )
    }
}

export default Post;