import React, { Component } from 'react'

class AddPost extends Component {

    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        let PostLnk = event.target.elements.PostLnk.value;
        let desc = event.target.elements.PostDesc.value;
        const newPost = {
            id : Number(new Date()),
            description : desc,
            imageLink : PostLnk
        }
        if(PostLnk && desc){
            this.props.onAddPost(newPost);
        }
    }
    render() {
        return (
            <div>
                <h1>Add Post</h1>    
                <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="PostLnk" placeholder="Link"/>
                    <input type="text" name="PostDesc" placeholder="Description"/>
                    <button> Post </button>
                </form>
                </div>
            </div>
        )
    }
}
export default AddPost