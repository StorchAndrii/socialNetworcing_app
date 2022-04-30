import React from "react";
import s from "./Users.module.css";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <h2>Users</h2>
      <div className={s.numberPages}>
        {pages.map((p) => {
          return (
            <span
              key={p}
              className={props.currentPage === p && s.selectedActive}
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id} className={s.container}>
          <span className={s.block1}>
            <div>
              <NavLink to={"/profile/" + u.name.first}>
                <img className={s.avatar} src={u.picture.large} alt="avatar" />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  className={s.button}
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  className={s.button}
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span className={s.infoBlock}>
            <span className={s.lInfo}>
              <div className={s.name}>
                {u.name.first} {u.name.last}
              </div>
              <div>{u.email}</div>
            </span>
            <span className={s.rInfo}>
              <div className={s.country}>{u.location.country}</div>
              <div className={s.country}>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
