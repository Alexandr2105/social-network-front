import React from "react";
import module from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {


    const post = props.posts.map(postData => <Post message={postData.message} likes={postData.likes}/>)

    return (
        <div className={module.posts}>
            <div>
                <p>My posts</p>
                <textarea></textarea>
                <button>Send</button>
            </div>
            <div className={module.posts}>
                {post}
            </div>
        </div>

    );
}

export default MyPosts;