import React from "react";
import s from "./Users.module.css";
import * as axios from "axios";

class UsersC extends React.Component {
  getUsers = () => {
    if (this.props.users.length === 0) {
      axios
        .get("https://randomuser.me/api/?page=3&results=4")
        .then((response) => {
          this.props.setUsers(response.data.results);
        });
    }
  };

  render() {
    return (
      <div>
        <h2>Users</h2>
        <button onClick={this.getUsers}>getUser</button>

        {this.props.users.map((u) => (
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
                      this.props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    className={s.button}
                    onClick={() => {
                      this.props.follow(u.id);
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
  }
}

export default UsersC;
