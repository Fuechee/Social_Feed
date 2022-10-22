import React, { useState } from 'react';
import AddPost from './Components/CreatePost/CreatePost';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import NavBar from './Components/NavBar/NavBar';
import './App.css';

function App() {

  const [posts, setPosts] = useState([])

  function addNewPost(post) {
    let tempPosts = [...posts, post];
    setPosts(tempPosts);
  }

  return (
    <div>
      <div>
        <NavBar/>
      </div>
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