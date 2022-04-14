import React from "react";
import {
  addNewMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  const state = props.store.getState().dialogsPages;

  const onSendMessageClick = () => {
    props.store.dispatch(addNewMessageActionCreator());
  };
  const changeMessageText = (body) => {
    props.store.dispatch(updateNewMessageTextActionCreator(body));
  };

  return (
    <Dialogs
      updateNewMessageBody={changeMessageText}
      sendMessage={onSendMessageClick}
      dialogsPages={state}
    />
  );
};

export default DialogsContainer;
