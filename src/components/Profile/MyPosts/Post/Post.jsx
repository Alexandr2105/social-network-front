import React from "react";
import module from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={module.item}>
            <img
                src="https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg"
                alt="avatar"/>
            {props.message}
            <p> Likes {props.likes}</p>
        </div>
    );
}

export default Post;