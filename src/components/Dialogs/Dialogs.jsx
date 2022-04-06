import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = () => {
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

  let dialogsElement = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messageElement = messages.map((m) => (
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
