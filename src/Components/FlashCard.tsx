import React, { useState } from 'react';
import {Paper} from "@material-ui/core"
import "./FlashCard.css";

interface Properties {
  words: ({ word: string, meaning: string, synonyms: string[], antonyms: string[], examples: string[] })[],
  seenWords: any[],
  setSeenWords: any
}

function FlashCard({ words, seenWords, setSeenWords }: Properties) {
  const [word, setWord] = useState(words[Math.floor(Math.random() * words.length)]);


  function flipCard(event: React.MouseEvent): void {
    event.preventDefault();
    var card = document.querySelector(".card");
    if (card === null) return;
    card.classList.toggle("flip");
  }

  function newWord(): void {
    setSeenWords([word, ...seenWords]);
    setWord(words[Math.floor(Math.random() * words.length)]);
  }

  return (
    <Paper>

    <div className="card-container">
      <div className="card" onClick={ flipCard }>
        <div className="face front">
          <h2>{  word.word }</h2>
        </div>
        <br />
        <div className="face back">
          <ul>
            <li>Meaning:</li>
            <li>
              <ul>
                <li>{ word.meaning }</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </Paper>
  );
}

export default FlashCard;
