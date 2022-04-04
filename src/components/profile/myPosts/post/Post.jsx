import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div>
      <div className={s.item}>
        <img
          src="http://www.kurzweilai.net/images/Naam-Limits-of-Earth-Part1-001-earth-600x600.jpg"
          alt="postImg"
        />
        Post1
      </div>
    </div>
  );
};

export default Post;
