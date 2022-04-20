import { connect } from "react-redux";
import Users from "./Users";
import {
  follow,
  getCurrentPage,
  setUsers,
  toggleIsFetching,
  unfollow,
} from "../../redux/usersReducer";
import React from "react";
import * as axios from "axios";
import Preloader from "../common/Preloader/Preloader";

class UsersAPI extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://randomuser.me/api/?page=${this.props.currentPage}&results=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.results);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.getCurrentPage(pageNumber);
    axios
      .get(
        `https://randomuser.me/api/?page=${pageNumber}&results=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.results);
      });
  };
  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            totalUserCount={this.props.totalUserCount}
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            onPageChanged={this.onPageChanged}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  getCurrentPage,
  toggleIsFetching,
})(UsersAPI);

export default UsersContainer;
