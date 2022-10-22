
const Post = (props) => {
    return ( 
        <div>
           <h2>{props.name}</h2>
           <p>{props.post}</p>
        </div>
     );
}
 
export default Post;