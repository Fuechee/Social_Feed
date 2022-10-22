import React, { useState } from 'react';

const AddPostForm = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            post: post
        };
        props.addNewPostProperty(newPost)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <label>name</label>
                <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div>
                <label>post</label>
                <input type="text" value={post} onChange={(event) => setPost(event.target.value)}/>
            </div>
        </form>
     );
}
 
export default AddPostForm;

