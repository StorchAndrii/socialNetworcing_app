import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>Dmitrii</div>
        <div className={s.dialog}>Andrey</div>
        <div className={s.dialog}>Stepan</div>
        <div className={s.dialog}>Viktor</div>
        <div className={s.dialog}>Lev</div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi!</div>
        <div className={s.message}>How are you?</div>
        <div className={s.message}>YO!</div>
        <div className={s.message}>Bye-bye</div>
      </div>
    </div>
  );
};

export default Dialogs;
