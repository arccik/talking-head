import Head from "next/head";
import styles from "@/styles/Home.module.css";
import ChatForm from "@/components/Chat/ChatForm";
import { useState, useEffect } from "react";
import { useSpeechSynthesis } from "react-speech-hooks";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [answers, setAnswers] = useState("");
  const { speak, voices } = useSpeechSynthesis();
  const [currentVoice, setCurrentVoice] = useState("");

  useEffect(() => {
    if (!currentVoice) {
      setCurrentVoice(voices[50]);
    }
  }, [voices]);

  const handleSubmit = () => {
    setLoading(true);
    if (!question) return setError("Type your question");
    fetch(`/api/chat?q=${question}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Data <<< ", data);
        setAnswers(data.answer);
      })
      .catch((e) => {
        setError(e.message);
        console.error(e);
      })
      .finally(() => {
        setQuestion("");
        setLoading(false);
      });
  };

  const handleSpeakButton = () => {
    speak({
      text: answers,
      currentVoice,
    });
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Chat GPT selfmade" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {loading && <span className={styles.loader}></span>}
        {answers && (
          <div className={`${styles.message} ${styles.conic} `}>
            <>
              <h4>{answers}</h4>
              <i className={styles.speechIcon} onClick={handleSpeakButton}>
                🔈
              </i>
            </>
          </div>
        )}
        <div className={styles.message}>
          <input
            className={styles.inputField}
            placeholder="Type message..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmit();
            }}
          />
          {/* <button className={styles.sendButton}>Send</button> */}
        </div>
        {/* <ChatForm handleChange={handleResponse} /> */}
      </main>
    </>
  );
}
