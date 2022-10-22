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
        <form className="form" onSubmit={handleSubmit} >
            <div className="entry">
                <div>
                    <label>Name</label>
                    <input className= "input-name" type='text' value={name} onChange={(event)=> setName(event.target.value)}/>
                </div>
                    <div>
                        <label className='post'>Post</label>
                        <input className="input-post" type="text" value={post} onChange={(event)=> setPost(event.target.value)} />
                        <button className="create-button" type="submit">Create</button>          
                    </div>
            </div>
        </form>
     );
}
 
export default AddPost;

