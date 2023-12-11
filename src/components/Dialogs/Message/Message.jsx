import mod from "../Dialogs.module.css";

const Message = (props) => {
    return (
        <div className={mod.message}>
            {props.message}
        </div>
    )
}

export default Message;