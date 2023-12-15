const ADD_POST_ACTION_TYPE = "ADD_POST_ACTION_TYPE";
const UPDATE_TEXT_NEW_POST_ACTION_TYPE = "UPDATE_TEXT_NEW_POST_ACTION_TYPE";

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST_ACTION_TYPE:
            const newPost = {
                id: 4,
                message: state.updateNewPost,
                likes: 0
            }
            state.posts.push(newPost);
            state.updateNewPost = "";
            return state;
        case UPDATE_TEXT_NEW_POST_ACTION_TYPE:
            state.updateNewPost = action.newText;
            return state;
        default :
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST_ACTION_TYPE});
export const updateTextNewPostActionCreator = (text) => ({type: UPDATE_TEXT_NEW_POST_ACTION_TYPE, newText: text});

export default profileReducer;