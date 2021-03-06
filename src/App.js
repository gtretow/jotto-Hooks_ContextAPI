import React from "react";
import hookActions from "./actions/hookActions";
import "./App.css";

import Input from "./Input";
import guessedWordsContext from "./contexts/guessedWordsContext";
import languageContext from "./contexts/languageContext";
import LanguagePicker from "./LanguagePicker";
import successContext from "./contexts/successContext";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
//reducer to update state
//state {object} - existing state
// action {object} - contains 'type' and 'payload' prperties for the state updated
// for example: {type:"setSecretWord", payload:'party'}
//returns an new state as {object}

function reducer(state, action) {
  switch (action.type) {
    case "setSecretWord":
      return { ...state, secretWord: action.payload };

    case "setLanguage":
      return { ...state, language: action.payload };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    secretWord: null,
    language: "en",
  });

  const setSecretWord = (secretWord) =>
    dispatch({ type: "setSecretWord", payload: secretWord });

  const setLanguage = (language) =>
    dispatch({ type: "setLanguage", payload: language });
  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  if (!state.secretWord) {
    return (
      <div className="container" data-test="spinner">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p>Loading secret word</p>
      </div>
    );
  }

  return (
    <div className="container" data-test="component-app">
      <h1>The Jotto Game!</h1>
      <p>the secret word is {state.secretWord}</p>
      <languageContext.Provider value={state.language}>
        <LanguagePicker setLanguage={setLanguage} />
        <guessedWordsContext.GuessedWordsProvider>
          <successContext.SuccessProvider>
            <Congrats />
            <Input secretWord={state.secretWord} />
          </successContext.SuccessProvider>
          <GuessedWords />
        </guessedWordsContext.GuessedWordsProvider>
      </languageContext.Provider>
    </div>
  );
}

export default App;
