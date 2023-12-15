import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Sidebar from "./components/SideBar/Sidebar";
import {Friends} from "./components/Friends/Friends";

const App = (props) => {
    return (
            <div className="app-wrapper">
                <Header/>
                <div className="nav">
                    <NavBar/>
                    <Sidebar reducerPage={props.state.reducerPage}/>
                </div>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="dialogs"
                               element={<Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch}/>}/>
                        <Route path="profile"
                               element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
                        <Route path="news" element={<News/>}/>
                        <Route path="music" element={<Music/>}/>
                        <Route path="settings" element={<Settings/>}/>
                        <Route path="friends" element={<Friends reducerPage={props.state.reducerPage}/>}/>
                    </Routes>
                </div>
            </div>
    );
}

export default App;
