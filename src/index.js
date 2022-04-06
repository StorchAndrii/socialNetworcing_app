import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let posts = [
  { id: 1, name: "My 1 post!", message: "Hi, how are you?", likePost: 20 },
  { id: 2, name: "My 2 post!", message: "It`s my first post", likePost: 50 },
];
let dialogs = [
  { id: 1, name: "Dima" },
  { id: 2, name: "Andrey" },
  { id: 3, name: "Lev" },
  { id: 4, name: "Mike" },
  { id: 5, name: "Stiv" },
  { id: 6, name: "Romero" },
  { id: 7, name: "Adam" },
];

let messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "Hello" },
  { id: 3, message: "How are you?" },
  { id: 4, message: "Yo!" },
  { id: 5, message: "Yo men!" },
  { id: 6, message: "Privet" },
  { id: 7, message: "Hello" },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
