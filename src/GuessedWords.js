import React from "react";

import guessedWordsContext from "./contexts/guessedWordsContext";
import languageContext from "./contexts/languageContext";
import stringsModule from "./helpers/strings";

const GuessedWords = () => {
  const [guessedWords] = guessedWordsContext.useGuessedWords();
  let contents;
  const language = React.useContext(languageContext);
  if (guessedWords.length === 0) {
    contents = (
      <span data-test="guess-instructions">
        {stringsModule.getStringByLanguage(language, "guessPrompt")}
      </span>
    );
  } else {
    const gussedWordsRows = guessedWords.map((word, index) => (
      <tr data-test="guessed-word" key={index}>
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ));
    contents = (
      <div data-test="guessed-words">
        <h3>{stringsModule.getStringByLanguage(language, "guessedWords")}</h3>
        <table className="table table-sm">
          <thead className="table-secondary">
            <tr>
              <th>
                {stringsModule.getStringByLanguage(
                  language,
                  "guessColumnHeader"
                )}
              </th>
              <th>
                {stringsModule.getStringByLanguage(
                  language,
                  "matchingLettersColumnHeader"
                )}
              </th>
            </tr>
          </thead>
          <tbody>{gussedWordsRows}</tbody>
        </table>
      </div>
    );
  }
  return <div data-test="component-guessed-words">{contents}</div>;
};

//proptypes
/* GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};
 */
export default GuessedWords;
