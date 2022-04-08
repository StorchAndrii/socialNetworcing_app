import React from "react";
import s from "./AddPost.module.css";

// !! React.createRef()- реакт создает ссылку к обьекту.

const AddPost = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = "";
  };

  return (
    <div>
      <div>
        <textarea ref={newPostElement} />
      </div>
      <button onClick={addPost}>Add</button>
    </div>
  );
};

export default AddPost;
