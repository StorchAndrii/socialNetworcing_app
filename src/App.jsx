import React from "react";
import "./App.css";
import Profile from "./components/profile/Profile";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route exact path="/profile/" element={<Profile />} />
            <Route exact path="/dialogs/" element={<Dialogs />} />
            <Route exact path="/news/" element={<News />} />
            <Route exact path="/music/" element={<Music />} />
            <Route exact path="/settings/" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
