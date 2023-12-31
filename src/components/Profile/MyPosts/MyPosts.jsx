import React from "react";
import module from "./MyPosts.module.css"
import Post from "./Post/Post";
import {addPost, updateTextNewPost} from "../../../redux/profileReducer";

const MyPosts = (props) => {

    const post = props.profilePage.posts.map(postData => <Post message={postData.message} likes={postData.likes}/>)

    const createPost = () => {
        props.dispatch(addPost());
    }

    const onChangePost = (e) => {
        const text = e.target.value;
        props.dispatch(updateTextNewPost(text));
    }

    return (
        <div className={module.posts}>
            <div>
                <p>My posts</p>
                <textarea onChange={onChangePost} placeholder="Введите текст" value={props.profilePage.updateNewPost}/>
                <button onClick={createPost}>Send</button>
            </div>
            <div className={module.posts}>
                {post}
            </div>
        </div>
    );
}

export default MyPosts;