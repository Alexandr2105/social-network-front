import mod from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import React from "react";
import Message from "./Message/Message";

const Dialogs = (props) => {
    const dialog = props.dialogsPage.dialogs.map(value => <Dialog name={value.name} id={value.id.toString()}
                                                            avatar={value.avatar}/>);
    const message = props.dialogsPage.messages.map(value => <Message message={value.message}/>);
    const createMessage = React.createRef();

    const addMessage = () => {
        props.addMessage();
    }

    const onChangeMessage = () => {
        const text = createMessage.current.value;
        props.updateTextNewMessage(text);
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
                <textarea onChange={onChangeMessage} ref={createMessage} value={props.dialogsPage.updateNewMessage}></textarea>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;