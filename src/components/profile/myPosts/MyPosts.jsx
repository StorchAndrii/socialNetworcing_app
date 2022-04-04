import React from "react";
import s from "./MyPosts.module.css";
import AddPost from "./NewPost/AddPost";
import Post from "./post/Post";

const MyPosts = () => {
  return (
    <div>
      myPost
      <AddPost />
      <Post name='My 1 post!' message="Hi, how are you?" />
      <Post name='My 2 post!' message="It`s my first post" />
    </div>
  );
};

export default MyPosts;
