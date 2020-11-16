import React from 'react';
import './NewPost.css';

class NewPost extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hidden: true,
            title: '',
            content: ''
        };
        this.showAndHide = this.showAndHide.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.create = this.create.bind(this);
    }

    showAndHide(){
        this.state.hidden? this.setState({hidden:false}) : this.setState({hidden: true});
    }

    handleTitleChange(e){
        const title = e.target.value;
        this.setState({title: title});
    }

    handleContentChange(e){
        const content = e.target.value;
        this.setState({content: content});
    }

    create(){
        this.props.create(this.state.title, this.state.content);
    }

    render(){
        return(
            <div className='newpost'>
                <button className="newpostbutton" onClick={this.showAndHide}>{this.state.hidden? '+':'-'}</button>
                {this.state.hidden? null :
                <div className='newpostcontent'>
                    <input type='text' defaultValue='Title' size='50' onChange={this.handleTitleChange}/>
                    <textarea id='#newpostcontent' defaultValue='Content' cols='75' rows='15' onChange={this.handleContentChange}/>
                    <button className='submitpostbutton' onClick={this.create}>CREATE</button>
                </div>}
            </div>
        )
    }
}

export default NewPost;