import React, { useEffect, useState } from 'react';
import { Paper, Button } from "@material-ui/core"
import "./FlashCard.css";
import { ArrowBackIosRounded, ArrowForwardIosRounded } from '@material-ui/icons';
import { word } from '../utils/getwords';

interface Properties {
  words: word[]
}

function FlashCard({ words }: Properties) {
  const [index, setIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [word, setWord]: [any, any] = useState({});

  function flipCard(event: React.MouseEvent): void {
    event.preventDefault();
    var card = document.querySelector(".card");
    if (card === null) return;
    card.classList.toggle("flip");
  }

  useEffect(function () {
    if (!(words.length === 0)) {
      setWord(words[Math.floor(Math.random() * words.length)])
    }
  }, [words])

  async function newWord(e: React.MouseEvent): Promise<any> {
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

    // var docRef = await addDoc(collection(db, "words"), words[newerIndex]);
    // console.log(docRef);

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
  if (words.length === 0 || Object.keys(word).length === 0) {
    return (
      <>
        <h1>Loading</h1>
      </>
    );
  }

  return (
    <>
      <Paper elevation={ 3 } style={ { width: "85vw" } }>
        <div className="card" onClick={ flipCard }>
          <div className="face front">
            <h2>{ word.word }</h2>
          </div>
          <br />
          <div className="face back">
            <ul className="main">
              <li><strong>Meaning:</strong></li>
              <ul>{ word.meaning.map((w: string) => <li className="no-style" key={ w }>{ w }</li>) }</ul>
              <li><strong>Part of Speech</strong>: { word.pos }</li>
              <li><strong>Synonyms</strong>: { word.synonyms.join(", ") }</li>
              <li><strong>Antonyms</strong>: { word.antonyms.join(", ") }</li>
              <li><strong>Example: </strong>
                <br />
                <ul>
                  { word.examples.map((eg: any) => <li key={ eg }>{ eg }</li>) }
                </ul>
              </li>
              { word.origin && <li><strong>Origin:</strong>{ word.origin }</li> }
            </ul>
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
