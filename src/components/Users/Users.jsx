import React from "react";
import s from "./Users.module.css";
import * as axios from "axios";

const Users = (props) => {
  if (props.users.length === 0) {
    axios.get("https://randomuser.me/api/").then((response) => {
      props.setUsers(response.data.results);
    });
  }
  return (
    <div>
      <h2>Users</h2>
      {props.users.map((u) => (
        <div key={u.id} className={s.container}>
          <span className={s.block1}>
            <div>
              <img className={s.avatar} src={u.picture.large} alt="avatar" />
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
                {u.name.first}
                {u.name.last}
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
