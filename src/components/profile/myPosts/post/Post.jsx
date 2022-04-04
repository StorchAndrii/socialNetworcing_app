import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={s.item}>
        <h4>{props.name}</h4>
        <img
          src="http://www.kurzweilai.net/images/Naam-Limits-of-Earth-Part1-001-earth-600x600.jpg"
          alt="postImg"
        />
        <p>{props.message}</p>
      </div>
    </div>
  );
};

export default Post;
