import React, { useState } from 'react';
import './App.css';
import FlashCard from './Components/FlashCard';
import wordlist from "./utils/word_list.json";
import {Button} from "@material-ui/core";


function App() {
  console.log(wordlist);
  const [seenWords, setSeenWords] = useState([]);
  return (
    <div className="App">
      <FlashCard words={wordlist} seenWords={seenWords} setSeenWords={setSeenWords} />
      <div className="navigator">
        <Button color="secondary" variant="contained" style={{fontSize: "2rem"}}>Previous Word</Button>
        <Button color="primary" variant="contained" style={{fontSize: "2rem"}}> New Word</Button>
      </div>
    </div>
  );
}

export default App;
