import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={`${s["dialog"]} ${s["active"]}`}>
          <NavLink
            to="/dialogs/1"
            // className={(navData) => (navData.isActive ? s.activeLink : "")}
          >
            Dmitrii
          </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink
            to="/dialogs/2"
            // className={(navData) => (navData.isActive ? s.activeLink : "")}
          >
            Andrey
          </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink
            to="/dialogs/3"
            // className={(navData) => (navData.isActive ? s.activeLink : "")}
          >
            Stepan
          </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink
            to="/dialogs/4"
            // className={(navData) => (navData.isActive ? s.activeLink : "")}
          >
            Viktor
          </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink
            to="/dialogs/5"
            // className={(navData) => (navData.isActive ? s.activeLink : "")}
          >
            Lev
          </NavLink>
        </div>
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
