import { useEffect, useState } from "react";
import { useSpeechRecognition } from "react-speech-hooks";

const Test = () => {
  const [wake, setWake] = useState(false);
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      if (result.toLowerCase().includes("bob")) {
        console.log("You are", result);
        setWake(true);
      }
    },
  });
  useEffect(() => {
    console.log("listen ", wake);
    listen();
  }, []);

  const handleListen = () => {
    console.log("Listening <>>>>> ");
  };
  return (
    <div style={{ top: "50%", right: "50%", position: "absolute" }}>
      <p style={{ color: listening ? "red" : "grey" }}>Hello</p>
      <button onClick={handleListen}>Listen</button>
    </div>
  );
};

export default Test;
