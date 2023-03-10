import { useState } from "react";
import "./index.css";

const FormModal = ({ displayModal, setDisplayModal }) => {
  const [modTitle, setModTitle] = useState("");
  const [modId, setModId] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://dummyjson.com/posts/${modId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: modTitle,
      }),
    });
    setDisplayModal(false);
  };

  return (
    <div className={`modal ${displayModal ? "" : "hide_modal"}`}>
      <h2>Modifica il tuo Splash</h2>
      <form onSubmit={onHandleSubmit} className="modal_form">
        <input
          type="text"
          placeholder="Testo dello splash"
          value={modTitle}
          onChange={(e) => setModTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Id messaggio"
          value={modId}
          onChange={(e) => setModId(e.target.value)}
        />
        <input type="submit" value="modifica" className="form_submit" />
      </form>
    </div>
  );
};

export default FormModal;
