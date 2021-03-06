import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import NavFriends from "./NavFriends/NavFriends";

const Navbar = (props) => {
  let friendsElement = props.sideBar.friends.map((f) => (
    <NavFriends key={f.id} name={f.name} avatar={f.img} />
  ));

  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink
          to="/profile"
          className={(navData) => (navData.isActive ? s.activeLink : "")}
        >
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/dialogs"
          className={(navData) => (navData.isActive ? s.activeLink : "")}
        >
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/users"
          className={(navData) => (navData.isActive ? s.activeLink : "")}
        >
          Users
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/news"
          className={(navData) => (navData.isActive ? s.activeLink : "")}
        >
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/music"
          className={(navData) => (navData.isActive ? s.activeLink : "")}
        >
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/settings"
          className={(navData) => (navData.isActive ? s.activeLink : "")}
        >
          Settings
        </NavLink>
      </div>

      <div className={s.friends}>
        <h3>Friends</h3>

        <div className={s.blockFriends}>{friendsElement}</div>
      </div>
    </nav>
  );
};

export default Navbar;
