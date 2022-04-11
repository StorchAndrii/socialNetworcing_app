import React from "react";
import s from "./AddMessages.module.css";

const AddMessages = (props) => {
  let messageRef = React.createRef();

  let addMessages = () => {
    let text = messageRef.current.value;
    props.dispatch({ type: "NEW-MESSAGE" });
  };
  let changeMessageText = () => {
    let text = messageRef.current.value;
    props.dispatch({ type: "UPDATE-NEW-MESSAGE-TEXT", newText: text });
  };

  return (
    <div>
      <div>
        <textarea
          rows="5"
          cols="86"
          ref={messageRef}
          value={props.valueMessagess}
          onChange={changeMessageText}
        />
      </div>
      <button onClick={addMessages}>Add</button>
    </div>
  );
};

export default AddMessages;
