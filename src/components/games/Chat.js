import axios from "axios";
import {useState} from 'react';

function Chat() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a request to the server with the prompt
    axios
      .post("/chat", { prompt })
      .then((res) => {
        // Update the response state with the server's response
        setResponse(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="chat-card">
      <form className="chat-form" onSubmit={handleSubmit}>
      <h1>Ask Me Anything!</h1>
        <input className="chat-input"
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button className="chat-btn" type="submit">ASK!</button>
      </form>
      <hr></hr>
      <div className="response-container">
      <p className="chat-response">{response}</p>
      </div>
    </div>
  );
}

export default Chat;