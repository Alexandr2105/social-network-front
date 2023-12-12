import mod from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import React from "react";
import Message from "./Message/Message";
import {addMessageActionCreator, updateTextNewMessageActionCreator} from "../../redux/state";

const Dialogs = (props) => {
    const dialog = props.dialogsPage.dialogs.map(value => <Dialog name={value.name} id={value.id.toString()}
                                                                  avatar={value.avatar}/>);
    const message = props.dialogsPage.messages.map(value => <Message message={value.message}/>);

    const addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    const onChangeMessage = (e) => {
        const text = e.target.value;
        props.dispatch(updateTextNewMessageActionCreator(text));
    }

    return (
        <div className={mod.dialogs}>
            <div className={mod.dialogsItems}>
                {dialog}
            </div>
            <div className={mod.messages}>
                {message}
            </div>
            <div>
                <textarea onChange={onChangeMessage} placeholder="Введите текст" value={props.dialogsPage.updateNewMessage}/>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;