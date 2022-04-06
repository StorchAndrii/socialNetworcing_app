import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  return (
    <div className={`${s["dialog"]} ${s["active"]}`}>
      <NavLink to={`/dialogs/${props.id}`}> {props.name} </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = () => {

  let dialogsData = [
    { id: 1, name: "Dima" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Lev" },
    { id: 4, name: "Mike" },
    { id: 5, name: "Stiv" },
    { id: 6, name: "Romero" },
    { id: 7, name: "Adam" },
  ]; 
   let messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hello" },
    { id: 3, message: "How are you?" },
    { id: 4, message: "Yo!" },
    { id: 5, message: "Yo men!" },
    { id: 6, message: "Privet" },
    { id: 7, message: "Hello" },
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name="Mike" id="4" />
        <DialogItem name="Stiv" id="5" />
        <DialogItem name="Romero" id="6" />
        <DialogItem name="Adam" id="7" />
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message} id={messagesData[0].id} />
        <Message message={messagesData[1].message} id={messagesData[1].id} />
        <Message message="How are you?" />
        <Message message="Yo!" />
        <Message message="Yo men!" />
        <Message message="Privet" />
      </div>
    </div>
  );
};

export default Dialogs;
