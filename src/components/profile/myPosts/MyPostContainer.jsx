import React from "react";
import MyPosts from "./MyPosts";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";

const MyPostContainer = (props) => {
  const state = props.store.getState();

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const onPosChangeText = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <div>
      <MyPosts
        newPostText={state.profilePage.newPostText}
        addPost={addPost}
        onChangePostText={onPosChangeText}
        posts={state.profilePage.posts}
      />
    </div>
  );
};

export default MyPostContainer;
