import ThumbButtons from "./ThumbButtons/ThumbButtons";

const Post = (props) => {
    return ( 
        <div>
           <h2>{props.name}</h2>
           <p>{props.post}</p>
           <ThumbButtons/>
        </div>
     );
}
 
export default Post;