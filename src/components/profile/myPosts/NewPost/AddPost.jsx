import React from "react";
import s from "./AddPost.module.css";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../../redux/state";

const AddPost = (props) => {
  // React.createRef()- реакт создает ссылку к обьекту.
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.dispatch(addPostActionCreator());
  };

  let onChengePostText = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
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
