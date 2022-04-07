import React from "react";
import s from "./AddMessages.module.css";

const AddMessages = () => {
  let newMessage = React.createRef();

  let addMessages = () => {
    let text = newMessage.current.value;
    alert(text);
  };
  return (
    <form>
      <div>
        <textarea rows="5" cols="86" ref={newMessage} />
      </div>
      <button onClick={addMessages}>Add</button>
      <button>Delet</button>
    </form>
  );
};

export default AddMessages;
