import React from "react";
import s from "./MyPosts.module.css";
import AddPost from "./NewPost/AddPost";
import Post from "./post/Post";

const MyPosts = () => {
  return (
    <div>
      myPost
      <AddPost />
      <Post namePost="My 1 post!" message="Hi, how are you?" likePost='20' />
      <Post namePost="My 2 post!" message="It`s my first post" likePost='50'/>
    </div>
  );
};

export default MyPosts;
