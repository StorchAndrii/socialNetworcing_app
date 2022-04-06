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
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Dima" id="1" />
        <DialogItem name="Lev" id="2" />
        <DialogItem name="Mike" id="4" />
        <DialogItem name="Stiv" id="5" />
        <DialogItem name="Romero" id="6" />
        <DialogItem name="Adam" id="7" />
      </div>
      <div className={s.messages}>
        <Message message="Hi" />
        <Message message="Hello" />
        <Message message="How are you?" />
        <Message message="Yo!" />
        <Message message="Yo men!" />
        <Message message="Privet" />
      </div>
    </div>
  );
};

export default Dialogs;
