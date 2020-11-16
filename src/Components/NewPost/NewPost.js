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
    }

    showAndHide(){
        this.state.hidden? this.setState({hidden:false}) : this.setState({hidden: true});
    }

    render(){
        return(
            <div className='newpost'>
                
                <button className="newpostbutton" onClick={this.showAndHide}>{this.state.hidden? 'ADD POST':'CANCEL'}</button>
                {this.state.hidden? null :
                    <div>
                        <input type='text' id='#newposttitle' defaultValue='Title' size='50'/>
                        <textarea id='#newpostcontent' defaultValue='Content' cols='75' rows='15'/>
                        <input type='submit' value='CREATE'/>
                    </div>
                }
            </div>
        )
    }
}

export default NewPost;