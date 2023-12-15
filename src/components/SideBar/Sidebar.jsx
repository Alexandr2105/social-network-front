import {NavLink} from "react-router-dom";
import mod from "./Sidebar.module.css"

const Sidebar = (props) => {
    const navbar = props.reducerPage.sidebar.map(value =>
        <div className={mod.item}>
            <img src={value.avatar} alt="avatar"/>
            <p>{value.name}</p>
        </div>
    )

    return (
        <div>
            <NavLink to="/friends">Friends</NavLink>
            <div className={mod.map}>
                {navbar}
            </div>
        </div>)
}

export default Sidebar;