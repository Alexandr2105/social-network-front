const ADD_MESSAGE_ACTION_TYPE = "ADD_MESSAGE_ACTION_TYPE";
const UPDATE_TEXT_NEW_MESSAGE_ACTION_TYPE = "UPDATE_TEXT_NEW_MESSAGE_ACTION_TYPE";

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE_ACTION_TYPE:
            const newMessage = {
                id: 4,
                message: state.updateNewMessage,
            }
            state.messages.push(newMessage);
            state.updateNewMessage = "";
            return state
        case UPDATE_TEXT_NEW_MESSAGE_ACTION_TYPE:
            state.updateNewMessage = action.newText;
            return state
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE_ACTION_TYPE});
export const updateTextNewMessageActionCreator = (text) => ({type: UPDATE_TEXT_NEW_MESSAGE_ACTION_TYPE, newText: text});

export default dialogsReducer;