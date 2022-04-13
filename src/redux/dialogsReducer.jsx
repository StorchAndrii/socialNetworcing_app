const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      let newMessages = {
        id: 8,
        message: state.valueMessagess,
      };
      state.messages.push(newMessages);
      state.valueMessagess = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.valueMessagess = action.message;
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
