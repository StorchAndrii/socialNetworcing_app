import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import AddMessages from "./messages/AddMessages";

const Dialogs = (props) => {
  let dialogsElement = props.dialogsPages.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messageElement = props.dialogsPages.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className={s.messages}>{messageElement}</div>
      <div className={s.addMessage}>
        <AddMessages addNewMessage={props.addNewMessage} valueMessagess={props.dialogsPages.valueMessagess} updateNewMessageText={props.updateNewMessageText}/>
      </div>
    </div>
  );
};

export default Dialogs;
