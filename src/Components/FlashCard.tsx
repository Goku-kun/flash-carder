import React, { useState } from 'react';
import { Paper, Button } from "@material-ui/core"
import "./FlashCard.css";
import { ArrowBackIosRounded, ArrowForwardIosRounded } from '@material-ui/icons';

interface Properties {
  words: ({ word: string, meaning: string[], synonyms: string[], antonyms: string[], examples: string[], pos: string, origin?: string })[],
  seenWords: any[],
  setSeenWords: any
}

function FlashCard({ words, seenWords, setSeenWords }: Properties) {
  const [index, setIndex] = useState(Math.floor(Math.random() * words.length));
  const [previousIndex, setPreviousIndex] = useState(index);
  const [word, setWord] = useState(words[index]);


  function flipCard(event: React.MouseEvent): void {
    event.preventDefault();
    var card = document.querySelector(".card");
    if (card === null) return;
    card.classList.toggle("flip");
  }

  function newWord(e: React.MouseEvent): void {
    var card = document.querySelector(".card");
    if (card !== null) {
      card.classList.remove("flip");
    }
    let newerIndex = Math.floor(Math.random() * words.length);
    while (index === newerIndex) {
      newerIndex = Math.floor(Math.random() * words.length);
    }
    setPreviousIndex(index);
    setIndex(newerIndex);

    setSeenWords([word, ...seenWords]);

    setWord(words[newerIndex]);
  }

  function previousWord(e: React.MouseEvent): void {
    var card = document.querySelector(".card");
    if (card !== null) {
      card.classList.remove("flip");
    }
    setIndex(previousIndex);
    setWord(words[previousIndex]);
  }

  return (
    <>
      <Paper elevation={ 3 }>
        <div className="card-container">
          <div className="card" onClick={ flipCard }>
            <div className="face front">
              <h2>{ word.word }</h2>
            </div>
            <br />
            <div className="face back">
              <ul className="main">
                <li><strong>Meaning:</strong></li>
                <ul>{ word.meaning.map(w => <li className="no-style" key={ w }>{ w }</li>) }</ul>
                <li><strong>Part of Speech</strong>: { word.pos }</li>
                <li><strong>Synonyms</strong>: { word.synonyms.join(", ") }</li>
                <li><strong>Antonyms</strong>: { word.antonyms.join(", ") }</li>
                <li><strong>Example: </strong>
                  <br />
                  <ul>
                    { word.examples.map(eg => <li key={ eg }>{ eg }</li>) }
                  </ul>
                </li>
                { word.origin && <li><strong>Origin:</strong>{ word.origin }</li> }
              </ul>
            </div>
          </div>
        </div>
      </Paper>
      <div className="navigator">
        <Button color="secondary" onClick={ previousWord } variant="contained" style={ { fontSize: "2rem" } } startIcon={ <ArrowBackIosRounded style={ { fontSize: "1.8rem" } } /> }>Previous Word </Button>
        <Button color="primary" onClick={ newWord } variant="contained" style={ { fontSize: "2rem" } } endIcon={ <ArrowForwardIosRounded style={ { fontSize: "1.8rem" } } /> }> New Word</Button>
      </div>
    </>
  );
}

export default FlashCard;
