import React from "react";
import mod from "./Navbar.module.css"
import Nav from "./NaveItems/NavItems";

const NavBar = () => {
    return (
        <nav className={mod.nav}>
            <Nav path="/profile" name="Profile"/>
            <Nav path="/dialogs" name="Message"/>
            <Nav path="/news" name="News"/>
            <Nav path="/music" name="Music"/>
            <Nav path="/settings" name="Settings"/>
        </nav>);
}

export default NavBar;