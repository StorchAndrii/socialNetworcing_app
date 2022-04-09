import React from "react";
import s from "./AddMessages.module.css";

const AddMessages = (props) => {
  console.log(props);
  let messageRef = React.createRef();

  let addMessages = () => {
    let text = messageRef.current.value;
    props.addNewMessage(text);
  };
  let changeMessageText = () => {
    let text = messageRef.current.value;
    console.log(text);
    props.updateNewMessageText(text);
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
