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
        if (this.state.title){
            this.props.create(this.state.title, this.state.content);
            this.setState({title: '', content: ''})
            this.showAndHide();
        }
    }

    render(){
        return(
            <div className='newpost'>
                <button className='button' onClick={this.showAndHide}>{this.state.hidden? '+':'-'}</button>
                {this.state.hidden? null :
                <div className='container'>
                    <div className='buttonscontainer'>
                        <button className='submit' onClick={this.create}>CREATE</button>
                    </div>
                    <div className='editor'> 
                        <input type='text' required placeholder='Title' maxLength='40' onChange={this.handleTitleChange}/>
                        <textarea placeholder='Content' cols='40' rows='15' onChange={this.handleContentChange}/>
                    </div>
                </div>}
            </div>
        )
    }
}

export default NewPost;