import { useState } from "react";
import styles from "./ChatForm.module.css";

const ChatForm = ({ handleChange }) => {
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const value = e.target[0].value;
    if (value) {
      fetch(`/api/chat?q=${value}`)
        .then((res) => res.json())
        .then((data) => {
          handleChange(data);
        })
        .catch((e) => console.error(e))
        .finally(() => {
          setMsg("");
          setLoading(false);
        });
    }
  };

  return (
    <>
      <button className={styles.openButton} onClick={() => setShow(true)}>
        Chat
      </button>
      {loading && <span className={styles.loader}></span>}
      {show && (
        <div className={styles.chatPopup} id="myForm">
          <form onSubmit={handleSubmit} className={styles.formContainer}>
            <h1>Ask Me Anything</h1>

            <label htmlFor="msgArea">
              <b>Archy Chat Mate</b>
            </label>

            <textarea
              placeholder="Type message.."
              name="msgArea"
              required
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            ></textarea>

            <button type="submit" className={styles.btn} disabled={loading}>
              Send
            </button>
            <button
              type="button"
              className={`${styles.btn} ${styles.cancel}`}
              onClick={() => setShow(false)}
            >
              Close
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatForm;
