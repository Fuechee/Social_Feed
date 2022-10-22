
const Post = (props) => {
    return ( 
        <div>
            <div>
                <h2>{props.postData.name}</h2>
            </div>
            <div>
                <div>{props.postData.post}</div>
            </div>
        </div>
     );
}
 
export default Post;