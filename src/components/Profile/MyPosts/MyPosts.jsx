import React from "react";
import module from "./MyPosts.module.css"
import Post from "./Post/Post";
import {addPostActionCreator, updateTextNewPostActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

    const post = props.profilePage.posts.map(postData => <Post message={postData.message} likes={postData.likes}/>)
    const newPostElement = React.createRef();

    const createPost = () => {
        props.distpatch(addPostActionCreator());
    }

    const onChangePost = () => {
        const text = newPostElement.current.value;
        props.distpatch(updateTextNewPostActionCreator(text));
    }

    return (
        <div className={module.posts}>
            <div>
                <p>My posts</p>
                <textarea onChange={onChangePost} ref={newPostElement} value={props.profilePage.updateNewPost}/>
                <button onClick={createPost}>Send</button>
            </div>
            <div className={module.posts}>
                {post}
            </div>
        </div>
    );
}

export default MyPosts;