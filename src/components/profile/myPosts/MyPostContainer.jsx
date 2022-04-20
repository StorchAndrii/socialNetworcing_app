import { connect } from "react-redux";
import MyPosts from "./MyPosts";
import { addPost, onChangePostText } from "../../../redux/profileReducer";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const MyPostContainer = connect(mapStateToProps, { addPost, onChangePostText })(
  MyPosts
);

export default MyPostContainer;
