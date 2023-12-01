import {NavLink} from "react-router-dom";
import mod from "./Dialog.module.css"

const Dialog = (props) => {
    return (
        <div className={mod.userInfo}>
            <NavLink to={props.id}>
                <img src={props.avatar} alt="avatar"/>
                <span>{props.name}</span>
            </NavLink>
        </div>)
}

export default Dialog;