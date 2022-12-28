import React, { useState } from "react";
import db, { FIREBASE } from "../firebase";
import { useStateValue } from "../StateProvider";
import "./ChatInput.css";



function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState('');
  const [{ user }] = useStateValue();

  const sendMessage = (e) => {
    e.preventDefault();
    if (channelId) {
    // console.log("meow")
      db.collection('rooms').doc(channelId).collection('messages').add({
        message: String(input),
        user: user?.displayName,
        userImage: user?.photoURL,
        // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        timestamp: FIREBASE.firestore.FieldValue.serverTimestamp(),
      });
    }
    setInput("");
  };
  return (
    <div className="chatInput">
      <form>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName?.toLowerCase()}`}
        />
        <button type='submit' onClick={sendMessage}>
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
