import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";
import { useSpeechSynthesis } from "react-speech-hooks";
import handleSpeaking from "@/utils/handleSpeaking";
import { useSpeechRecognition } from "react-speech-hooks";
import useLongPress from "@/hooks/useLongPress";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [answers, setAnswers] = useState("");
  const { speak, voices } = useSpeechSynthesis();

  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      console.log("listening<<< ");
      setQuestion(result);
      if (result.toLowerCase().includes("bob")) {
        setQuestion(result);
        handleQuestion();
        console.log("You are", result);
      }
      // handleQuestion();
    },
  });

  const onLongPress = () => {
    console.log("longpress is triggered, listening....");
    listen();
  };

  const longPressEvent = useLongPress(onLongPress, 500);

  const handleQuestion = () => {
    setLoading(true);
    if (!question) return setError("Type your question"), setLoading(false);
    fetch(`/api/chat?q=${question}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Data <<< ", data);
        setAnswers(data.answer);
        handleSpeaking(data.answer);
      })
      .catch((e) => {
        setError(e.message);
        console.error(e);
      })
      .finally(() => {
        setQuestion("");
        setLoading(false);
        setError(null);
      });
  };

  const handleSpeakButton = () => {
    speak({
      text: answers,
      currentVoice: voices[1],
      rate: 0.9,
    });
  };

  return (
    <>
      <Head>
        <title>Chat who knows everything</title>
        <meta name="description" content="Chat GPT" />
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
                Ask Browser to say this
              </i>
            </>
          </div>
        )}
        <div className={styles.message}>
          <input
            className={styles.inputField}
            autoFocus
            placeholder="Type message..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleQuestion();
            }}
          />
          <button
            onClick={stop}
            {...longPressEvent}
            // onKeyDown={(key) => key.code === "Space" && listen()}
            // onKeyUp={(key) => key.code === "Space" && stop()}
            style={{
              backgroundColor: listening
                ? "rgba(204, 128, 128, 0.499)"
                : "transparent",
            }}
            className={styles.micIcon}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"></path>
              <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"></path>
            </svg>
          </button>
          <button
            onClick={() => handleSpeaking(answers)}
            className={styles.micIcon}
            style={{ backgroundColor: error ? "red" : "none" }}
            disabled={error}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"></path>
              <path
                fillRule="evenodd"
                d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
              ></path>
            </svg>
          </button>
        </div>
        {/* <ChatForm handleChange={handleResponse} /> */}
      </main>
    </>
  );
}
