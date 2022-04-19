import { connect } from "react-redux";
import Users from "./Users";
import {
  followAC,
  getCurrentPageAC,
  setUsersAC,
  unfollowAC,
} from "../../redux/usersReducer";
import React from "react";
import * as axios from "axios";

class UsersAPI extends React.Component {
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
    return (
      <Users
        totalUserCount={this.props.totalUserCount}
        currentPage={this.props.currentPage}
        pageSize={this.props.pageSize}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        onPageChanged={this.onPageChanged}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    getCurrentPage: (pageNumber) => {
      dispatch(getCurrentPageAC(pageNumber));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);

export default UsersContainer;
