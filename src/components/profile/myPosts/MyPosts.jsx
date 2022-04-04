import React from "react";
import s from "./MyPosts.module.css";
import AddPost from "./NewPost/AddPost";
import Post from "./post/Post";

const MyPosts = () => {
  return (
    <div>
      myPost
      <AddPost />
      <Post />
    </div>
  );
};

export default MyPosts;
