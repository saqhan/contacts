import React, { useRef } from "react";

import "./ItemAddForm.css";

const ItemAddForm = ({ addMessage }) => {
  let input = useRef(null);

  function sendMess(e) {
    e.preventDefault();

    let message = input.current.value;

    if (message) {
      addMessage(message);
    }
    input.current.value = "";
  }

  return (
    <div className="ItemAddForm">
      <form className="item-form" onSubmit={sendMess}>
        <input 
          className="form-input "
          ref={input}
          placeholder="Введите сообщение.."
        />
      </form>
    </div>
  );
};

export default ItemAddForm;
