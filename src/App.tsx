import React, { useEffect, useState } from 'react';
import './App.css';
import FlashCard from './Components/FlashCard';
import { getWords, word } from './utils/getwords';
// import { db, firebaseApp } from "./utils/firebase";
// import { getWords } from "./utils/getwords";

function App() {

  var [words, setWords]: [word[], any] = useState([]);

  useEffect(function () {
    async function initialize() {
      var words: word[] = await getWords();
      setWords(words);
    }
    initialize();
  }, [])
  return (
    <div className="App">
      <FlashCard words={ words } />
    </div>
  );
}

export default App;
