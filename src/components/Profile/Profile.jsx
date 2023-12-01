import React from "react";
import mod from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div className={mod.content}>
            <div>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="nature"/>
            </div>
            <MyPosts posts={props.state.posts}/>
        </div>
    );
}

export default Profile;