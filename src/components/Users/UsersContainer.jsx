import { connect } from "react-redux";
import Users from "./Users";
import {
  followAC,
  getCurrentPageAC,
  setUsersAC,
  unfollowAC,
} from "../../redux/usersReducer";
import UsersC from "./UsersC";

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);

export default UsersContainer;
