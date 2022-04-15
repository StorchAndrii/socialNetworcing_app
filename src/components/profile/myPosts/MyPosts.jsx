import React from "react";
import s from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = (props) => {
  const postsElement = props.posts.map((p) => (
    <Post
      key={p.id}
      namePost={p.name}
      message={p.message}
      likePost={p.likePost}
    />
  ));
  const newPostElement = React.createRef();
  const addPost = () => {
    props.addPost();
  };
  const onChangePostText = () => {
    let text = newPostElement.current.value;
    props.onChangePostText(text);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My Post</h3>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            value={props.newPostText}
            onChange={onChangePostText}
          />
        </div>
        <button onClick={addPost}>Add</button>
      </div>
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
};

export default MyPosts;
