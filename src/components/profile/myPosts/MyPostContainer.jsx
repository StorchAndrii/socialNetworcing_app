import { connect } from "react-redux";
import MyPosts from "./MyPosts";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    onChangePostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
  };
};
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostContainer;
