import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const state = props.dialogsPages;

  const dialogsElement = state.dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ));
  const messageElement = state.messages.map((m) => (
    <Message key={m.id} message={m.message} id={m.id} />
  ));
  const newMessageBody = state.newMessageBody;

  const addMessagesClick = () => {
    props.sendMessage();
  };
  const changeMessageText = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className={s.messages}>{messageElement}</div>
      <div className={s.addMessage}>
        <div>
          <textarea
            rows="5"
            cols="86"
            placeholder="message..."
            value={newMessageBody}
            onChange={changeMessageText}
          />
        </div>
        <button onClick={addMessagesClick}>send</button>
      </div>
    </div>
  );
};

export default Dialogs;
