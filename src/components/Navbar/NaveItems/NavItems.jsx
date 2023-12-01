import {NavLink} from "react-router-dom";

const Nav = (props) => {
    return (
        <div>
            <NavLink to={props.path}>{props.name}</NavLink>
        </div>
    )
}

export default Nav;