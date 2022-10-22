import Post from "../Post/Post";

const DisplayPosts = (props) => {
    return ( 
    <div className="displayPost">
        {props.parentPosts.map((post, index)=>{
            return(
                <Post key={index} name={post.name} post={post.post}/>
            )
        })}
    </div>
    );
}

export default DisplayPosts;