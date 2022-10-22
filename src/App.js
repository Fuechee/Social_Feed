import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import AddPostForm from './Components/CreatePost/CreatePost';

function App() {

  const [posts, setPosts] = useState()

  function addNewPost(post) {
    let tempPosts = [...posts, post];
    setPosts(tempPosts);
  }

  return (
    <div className='container-fluid'>
      <div>
        <AddPostForm addNewPosts={addNewPost}/>
      </div>
      <div>
        <DisplayPosts parentPosts={posts}/>
      </div>
    </div>
  );
}

export default App;