import React from "react";
import s from "./Users.module.css";
import * as axios from "axios";

class UsersC extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://randomuser.me/api/?page=${this.props.currentPage}&results=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.results);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.getCurrentPage(pageNumber);
    axios
      .get(
        `https://randomuser.me/api/?page=${pageNumber}&results=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.results);
      });
  };
  render() {
    let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
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
                className={this.props.currentPage === p && s.selectedActive}
                onClick={(e) => {
                  this.onPageChanged(p);
                }}
              >
                {p}
              </span>
            );
          })}
        </div>
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
