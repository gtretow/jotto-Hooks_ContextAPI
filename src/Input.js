import React from "react";
import propTypes from "prop-types";

import successContext from "./contexts/successContext";
import languageContext from "./contexts/languageContext";
import stringsModule from "./helpers/strings";

//destruturação de secretWord
function Input({ secretWord }) {
  const language = React.useContext(languageContext);
  const [success, setSuccess] = successContext.useContext();
  const [currentGuess, setCurrentGuess] = React.useState("");

  if (success) {
    return null;
  }
  // é necessário retornar o state assim para usar mock functions

  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-s mx-sm-3"
          type="text"
          placeholder={stringsModule.getStringByLanguage(
            language,
            "guessInputPlaceholder"
          )}
          value={currentGuess}
          onChange={(event) => setCurrentGuess(event.target.value)}
        ></input>
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          onClick={(evt) => {
            //previnir que a pagina atualize sozinha
            evt.preventDefault();
            //TODO: update guessedWords
            if (currentGuess === secretWord) {
              setSuccess(true);
            }

            //TODO: check against secretWord and update success if needed
            //clear input box
            setCurrentGuess("");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

//uso de mocks
//Não deixa funções reais rodarem, preve network calls pode espiar função para ver qnd é chamada (assim vc sabe que ela é chamada na hora certa e com argumentos certos) e vc também pode providenciar return values

Input.propTypes = {
  secretWord: propTypes.string.isRequired,
};

export default Input;
