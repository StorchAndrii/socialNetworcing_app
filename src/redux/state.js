let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, name: "My 1 post!", message: "Hi, how are you?", likePost: 20},
        {
          id: 2,
          name: "My 2 post!",
          message: "It`s my first post",
          likePost: 50,
        },
      ],
      newPostText: "Hello Storch",
    },
    dialogsPages: {
      dialogs: [
        {id: 1, name: "Dima"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Lev"},
        {id: 4, name: "Mike"},
        {id: 5, name: "Stiv"},
        {id: 6, name: "Romero"},
        {id: 7, name: "Adam"},
      ],

      messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Hello"},
        {id: 3, message: "How are you?"},
        {id: 4, message: "Yo!"},
        {id: 5, message: "Yo men!"},
        {id: 6, message: "Privet"},
        {id: 7, message: "Hello"},
      ],
      valueMessagess: "<<<Storch>>>",
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
  },
  getState() {
    return this._state
  },
  rerenderEntireTree() {
    console.log('state is changed')
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likePost: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._rerenderEntireTree(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._rerenderEntireTree(this._state);
  },
  addNewMessage(textMessage) {
    let newMessages = {
      id: 15,
      message: textMessage,
    };
    this._state.dialogsPages.messages.push(newMessages);
    this._state.dialogsPages.valueMessagess = "";
    this._rerenderEntireTree(this._state);
  },
  updateNewMessageText(newMessage) {
    this._state.dialogsPages.valueMessagess = newMessage;
    this._rerenderEntireTree(this._state);
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer; //наблюдатель
  },
}

export default store;
window.store = store;
