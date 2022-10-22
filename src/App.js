import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import AddPost from './Components/CreatePost/CreatePost';

function App() {

  const [posts, setPosts] = useState([])

  function addNewPost(post) {
    let tempPosts = [...posts, post];
    setPosts(tempPosts);
  }

  return (
    <div>
      <div>
        <AddPost addNewPostProperty={addNewPost}/>
      </div>
      <div>
        <DisplayPosts parentPosts={posts}/>
      </div>
    </div>
  );
}

export default App;