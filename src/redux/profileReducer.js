import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    posts: [
        {
            id: 1,
            message: "Hi, my name is Alex.",
            likes: "20"
        }, {
            id: 2,
            message: "What is you name?",
            likes: 10
        }, {
            id: 3,
            message: "How are you?",
            likes: 99
        }
    ],
    updateNewPost: "",
};

const profileReducer = createSlice({
    name: "profile",
    initialState: initialState,
    reducers: {
        addPost(state, action) {
            const newPost = {
                id: 4,
                message: state.updateNewPost,
                likes: 0
            }
            state.posts.push(newPost);
            state.updateNewPost = "";
        },
        updateTextNewPost(state, action) {
            state.updateNewPost = action.payload;
        }
    }
})

export const {addPost, updateTextNewPost} = profileReducer.actions;
export default profileReducer.reducer;