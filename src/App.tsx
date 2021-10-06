import React, { useEffect, useState } from 'react';
import './App.css';
import Auth from './Components/Auth';
import FlashCard from './Components/FlashCard';
import { getWords, word } from './utils/getwords';
import { getAuth, GoogleAuthProvider, signInWithPopup } from '@firebase/auth'
import { provider } from './utils/firebase';

function App() {

  var [words, setWords]: [word[], any] = useState([]);
  var [user, setUser]: [any, any] = useState(null);

  useEffect(function () {
    async function initialize() {
      var words: word[] = await getWords();
      setWords(words);
    }
    initialize();
  }, [])


  async function login(e: React.MouseEvent): Promise<any> {

    var auth = getAuth();
    var result = null;
    try {
      var response = await signInWithPopup(auth, provider);
      result = GoogleAuthProvider.credentialFromResult(response);
      console.log(result);
      console.log(response);
    } catch (e) {
      console.log(e);
      result = null;
    } finally {
      setUser(result);
    }
  }

  return (
    <div className="App">
      { user === null && <Auth login={ login } /> }
      { user && <FlashCard words={ words } /> }
    </div>
  );
}

export default App;
