import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

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
    </div>
  );
};

export default Dialogs;
