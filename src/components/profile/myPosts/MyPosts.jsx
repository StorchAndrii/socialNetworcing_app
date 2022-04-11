import React from "react";
import s from "./MyPosts.module.css";
import AddPost from "./NewPost/AddPost";
import Post from "./post/Post";

const MyPosts = (props) => {
  let postsElement = props.posts.map((p) => (
    <Post namePost={p.name} message={p.message} likePost={p.likePost} />
  ));
  return (
    <div className={s.postsBlock}>
      <h3>My Post</h3>
      <div>
        <AddPost
          updateNewPostText={props.updateNewPostText}
          newPostText={props.newPostText}
          addPost={props.addPost}
        />
      </div>
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
};

export default MyPosts;
