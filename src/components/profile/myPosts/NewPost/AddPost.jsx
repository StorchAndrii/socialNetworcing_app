import React from "react";
import s from "./AddPost.module.css";

// !! React.createRef()- реакт создает ссылку к обьекту.

const AddPost = () => {
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  };

  return (
    <form>
      <div>
        <textarea ref={newPostElement} />
      </div>
      <button onClick={addPost}>Add</button>
      <button>Delet</button>
    </form>
  );
};

export default AddPost;
