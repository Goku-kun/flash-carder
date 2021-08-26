import React, { useState } from 'react';
import './App.css';
import FlashCard from './Components/FlashCard';
import wordlist from "./utils/word_list.json";

function App() {
  const [seenWords, setSeenWords] = useState([]);
  return (
    <div className="App">
      <FlashCard words={ wordlist } seenWords={ seenWords } setSeenWords={ setSeenWords } />

    </div>
  );
}

export default App;
