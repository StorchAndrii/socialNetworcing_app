import React from "react";
import s from "./MyPosts.module.css";
import AddPost from "./NewPost/AddPost";
import Post from "./post/Post";

const MyPosts = () => {
  let posts = [
    { id: 1, name: "My 1 post!", message: "Hi, how are you?", likePost: 20 },
    { id: 2, name: "My 2 post!", message: "It`s my first post", likePost: 50 },
  ];

  let postsElement = posts.map((p) => (
    <Post namePost={p.name} message={p.message} likePost={p.likePost} />
  ));
  return (
    <div className={s.postsBlock}>
      <h3>My Post</h3>
      <div>
        <AddPost />
      </div>
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
};

export default MyPosts;
