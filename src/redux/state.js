import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, name: "My 1 post!", message: "Hi, how are you?", likePost: 20 },
      {
        id: 2,
        name: "My 2 post!",
        message: "It`s my first post",
        likePost: 50,
      },
    ],
  },
  dialogsPages: {
    dialogs: [
      { id: 1, name: "Dima" },
      { id: 2, name: "Andrey" },
      { id: 3, name: "Lev" },
      { id: 4, name: "Mike" },
      { id: 5, name: "Stiv" },
      { id: 6, name: "Romero" },
      { id: 7, name: "Adam" },
    ],

    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "Hello" },
      { id: 3, message: "How are you?" },
      { id: 4, message: "Yo!" },
      { id: 5, message: "Yo men!" },
      { id: 6, message: "Privet" },
      { id: 7, message: "Hello" },
    ],
  },
  sideBar: {
    friends: [
      {
        id: 1,
        name: "Bart",
        img: "https://png.pngitem.com/pimgs/s/198-1982799_imagenes-en-png-bart-simpson-butt-transparent-png.png",
      },
      {
        id: 2,
        name: "March",
        img: "https://gitlab.freedesktop.org/uploads/-/system/user/avatar/6683/avatar.png",
      },
      {
        id: 3,
        name: "Lisa",
        img: "https://yt3.ggpht.com/ytc/AAUvwngGCH2v4hHrxufLNWOUXj0fClMQME05lTJjfg9e=s900-c-k-c0x00ffffff-no-rj",
      },
    ],
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likePost: 0,
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};
export default state;