import React from "react";
import "./App.css";
import Profile from "./components/profile/Profile";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar sideBar={props.state.sideBar} />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/profile/"
            element={<Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}
          />
          <Route
            path="/dialogs/"
            element={<Dialogs dialogsPages={props.state.dialogsPages} addNewMessage={props.addNewMessage}  updateNewMessageText={props.updateNewMessageText}/>}
          />
          <Route path="/news/" element={<News />} />
          <Route path="/music/" element={<Music />} />
          <Route path="/settings/" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
