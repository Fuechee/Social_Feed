import './CreatePost.css';

import React, { useState } from 'react';

const AddPost = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            post: post
        };
        console.log(newPost);
        props.addNewPostProperty(newPost)
    }

    return ( 
        <form class = "form"id="form" onSubmit={handleSubmit} >
            <div class="input">
                <div>
                    <label>Name</label>
                    <input class = "input-name" id ="name"type='text' value={name} onChange={(event)=> setName(event.target.value)}/>
                </div>
                <div class = "bottom-half">
                    <label>Post</label>
                    <div class="bottom-right">
                        <textarea class="input-post" id = 'post'type="text" value={post} onChange={(event)=> setPost(event.target.value)} />
                        <button class="create-button" type="submit">Create</button>
                    </div>
                    </div>    
            </div> 
        </form>
     );
}
 
export default AddPost;

