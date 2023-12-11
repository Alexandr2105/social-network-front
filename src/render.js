import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import {addMessage, addPost, updateTextNewMessage, updateTextNewPost} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

export const renderApp = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateTextNewPost={updateTextNewPost} addMessage={addMessage}
                 updateTextNewMessage={updateTextNewMessage}/>
        </React.StrictMode>
    );
}