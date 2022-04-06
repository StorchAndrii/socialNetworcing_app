import React from "react";
import s from "./MyPosts.module.css";
import AddPost from "./NewPost/AddPost";
import Post from "./post/Post";

const MyPosts = () => {
  let postData = [
    { id: 1, name: "My 1 post!", message: "Hi, how are you?", likePost: 20 },
    { id: 2, name: "My 2 post!", message: "It`s my first post", likePost: 50 },
  ];

  return (
    <div className={s.postsBlock}>
      <h3>My Post</h3>
      <div>
        <AddPost />
      </div>
      <div className={s.posts}>
        <Post
          namePost={postData[0].name}
          message={postData[0].message}
          likePost={postData[0].likePost}
        />
        <Post
          namePost={postData[1].name}
          message={postData[1].message}
          likePost={postData[1].likePost}
        />
      </div>
    </div>
  );
};

export default MyPosts;
