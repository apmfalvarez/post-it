import React from 'react';
import './Post.css';

class Post extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        hidden: true,
        id: this.props.post.id,
        title: this.props.post.title,
        content: this.props.post.content,
        editing: false
      };
      this.showAndHide = this.showAndHide.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
      this.handleEdit = this.handleEdit.bind(this);
      this.handleConfirmEdit = this.handleConfirmEdit.bind(this);
      this.handleTitleChange = this.handleTitleChange.bind(this);
      this.handleContentChange = this.handleContentChange.bind(this);
  }
  showAndHide(){
    this.state.hidden? this.setState({hidden:false}) : this.setState({hidden: true});
  }
  handleDelete(){
    this.props.delete(this.props.post);
  }
  handleEdit(){
    this.state.editing? this.setState({editing:false}) : this.setState({editing: true});
  }
  handleConfirmEdit(){
    this.props.editPost({id: this.state.id, title: this.state.title, content: this.state.content});
    this.handleEdit();
  }
  handleTitleChange(e){
    const newTitle = e.target.value;
    this.setState({title: newTitle});
  }
  handleContentChange(e){
    const newContent = e.target.value;
    this.setState({content: newContent});
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
                  {this.state.editing? <button className='confirmeditbutton' onClick={this.handleConfirmEdit}>SAVE</button> : null}
                  <button className='posteditbutton' onClick={this.handleEdit}>{this.state.editing? 'CANCEL' : 'EDIT'}</button>
                  <button className='postdeletebutton' onClick={this.handleDelete}>DELETE</button>
                </div>
                {this.state.editing?
                  <div>
                    <input type='text' defaultValue={this.props.post.title} onChange={this.handleTitleChange}/>
                    <textarea defaultValue={this.props.post.title} cols='40' rows='15' onChange={this.handleContentChange}/>
                  </div>
                :
                  this.props.post.content.split('\n').map((line)=>{return <p>{line}</p>})
                }
              </div>
            }
          </div>
      )
  }
}

export default Post;