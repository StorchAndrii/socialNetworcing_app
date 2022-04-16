import React from "react";
import s from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        followed: false,
        fullName: "Bart Simpson",
        img: "https://png.pngitem.com/pimgs/s/198-1982799_imagenes-en-png-bart-simpson-butt-transparent-png.png",
        status: "I am Devils.... 👿",
        location: {
          country: "USA",
          city: "Springfield",
        },
      },
      {
        id: 2,
        followed: true,
        fullName: "March Simpson",
        img: "https://gitlab.freedesktop.org/uploads/-/system/user/avatar/6683/avatar.png",
        status: "I am happy",
        location: {
          country: "USA",
          city: "Springfield",
        },
      },
      {
        id: 3,
        followed: false,
        fullName: "Lisa Simpson",
        img: "https://yt3.ggpht.com/ytc/AAUvwngGCH2v4hHrxufLNWOUXj0fClMQME05lTJjfg9e=s900-c-k-c0x00ffffff-no-rj",
        status: "I love music",
        location: {
          country: "USA",
          city: "Springfield",
        },
      },
      {
        id: 4,
        followed: false,
        fullName: "Maggie Simpson",
        img: "https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png",
        status: "Be...be...be..🍼",
        location: {
          country: "USA",
          city: "Springfield",
        },
      },
    ]);
  }
  return (
    <div>
      <h2>Users</h2>
      {props.users.map((u) => (
        <div key={u.id} className={s.container}>
          <span className={s.block1}>
            <div>
              <img className={s.avatar} src={u.img} alt="avatar" />
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
              <div className={s.name}>{u.fullName}</div>
              <div>{u.status}</div>
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
