import React from "react";
import hookActions from "./actions/hookActions";
import "./App.css";

//reducer to update state
//state {object} - existing state
// action {object} - contains 'type' and 'payload' prperties for the state updated
// for example: {type:"setSecretWord", payload:'party'}
//returns an new state as {object}

function reducer(state, action) {
  switch (action.type) {
    case "setSecretWord":
      return { ...state, secretWord: action.payload };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, { secretWord: null });

  const setSecretWord = (secretWord) =>
    dispatch({ type: "setSecretWord", payload: secretWord });

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  return <div data-test="component-app"></div>;
}

export default App;
