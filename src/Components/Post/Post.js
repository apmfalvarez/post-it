import React from 'react';
import './Post.css';

class Post extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        is_open: this.props.post.is_open,
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
    this.props.editPost({id: this.state.id, is_open: this.state.is_open === 1? 0 : 1, title: this.state.title, content: this.state.content})
  }
  handleDelete(){
    this.props.delete(this.props.post);
  }
  handleEdit(){
    this.state.editing? this.setState({editing:false}) : this.setState({editing: true});
  }
  handleConfirmEdit(){
    this.props.editPost({id: this.state.id, title: this.state.title, content: this.state.content, is_open: this.state.is_open});
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
            {this.state.is_open? 
              <div>
                <div className='postcontent'>
                  <div className='postheader'>
                    {this.state.editing? 
                      <input type='text' maxLength='30' defaultValue={this.props.post.title} onChange={this.handleTitleChange}/> 
                      :
                      <h4>{this.props.post.title}</h4>
                    }
                    <div className='postbuttonscontainer'>
                      <button className='postdeletebutton' onClick={this.handleDelete}></button>
                      {this.state.editing? <button className='confirmeditbutton' onClick={this.handleConfirmEdit}></button> : null}
                      <button className='posteditbutton' onClick={this.handleEdit}></button>
                      <button className='showcontentbutton' onClick={this.showAndHide}>X</button>
                    </div>
                  </div>
                  {this.state.editing?
                    <div className='posteditor'>
                      <textarea defaultValue={this.props.post.content} cols='35' rows='15' onChange={this.handleContentChange}/>
                    </div>
                    : 
                    <div className='posttext'>
                      {this.props.post.content.split('\n').map((line)=>{
                        if (line){
                          return <p>{line}</p>
                        }else{
                          return <br/>
                        }
                      })}
                    </div>
                  }
                </div>
              </div>
              :
              <div className='postinfo'>
                <button className='showcontentbutton' onClick={this.showAndHide}>{this.state.is_open? 'HIDE':'SHOW'}</button>
                <h2>{this.props.post.title}</h2>
              </div>
            }
          </div>
      )
  }
}

export default Post;