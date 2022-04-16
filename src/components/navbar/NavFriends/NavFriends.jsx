import React from "react";
import s from "./NavFriends.module.css";

const NavFriends = (props) => {
  return (
    <div className={s.block}>
      <div className={s.avatar}>
        <img src={props.avatar} alt="pfoto" />
      </div>
      <div className={s.name}>{props.name}</div>
    </div>
  );
};

export default NavFriends;
