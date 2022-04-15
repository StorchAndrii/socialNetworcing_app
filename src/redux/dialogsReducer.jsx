const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initState = {
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
    { id: 7, message: "Hello men" },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      let newMessages = {
        id: 8,
        message: state.newMessageBody,
      };
      state.messages.push(newMessages);
      state.newMessageBody = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageBody = action.message;
      return state;
    default:
      return state;
  }
};

export const addNewMessageActionCreator = () => {
  return { type: ADD_NEW_MESSAGE };
};
export const updateNewMessageTextActionCreator = (text) => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, message: text };
};
export default dialogsReducer;
