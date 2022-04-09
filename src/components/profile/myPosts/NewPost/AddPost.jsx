import React from "react";
import s from "./AddPost.module.css";

// !! React.createRef()- реакт создает ссылку к обьекту.

const AddPost = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {

    let text = newPostElement.current.value;
    props.addPost(text);
  };

  let onChengePostText = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div>
      <div>
        <textarea
          ref={newPostElement}
          value={props.newPostText}
          onChange={onChengePostText}
        />
      </div>
      <button onClick={addPost}>Add</button>
    </div>
  );
};

export default AddPost;
