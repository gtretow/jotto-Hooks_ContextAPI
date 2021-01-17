import React from "react";
import propTypes from "prop-types";

//destruturação de secretWord
function Input({ secretWord }) {
  const [currentGuess, setCurrentGuess] = React.useState("");
  // é necessário retornar o state assim para usar mock functions

  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-s mx-sm-3"
          type="text"
          placeholder="enter guess"
          value={currentGuess}
          onChange={(event) => setCurrentGuess(event.target.value)}
        ></input>
        <button data-test="submit-button" className="btn btn-primary mb-2">
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
