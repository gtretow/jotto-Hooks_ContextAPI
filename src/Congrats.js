//functional component with no class - gonna receive value via props and show the congrats message if success is true
import React from "react";
import PropTypes from "prop-types";

import languageContext from "./contexts/languageContext";
import stringsModule from "./helpers/strings";

/* Functional react component for congratulatory message 
@function 
@param {object} props - react props
@returns {JSX.Element} rendered component
 */

const Congrats = (props) => {
  const language = React.useContext(languageContext);
  if (props.success) {
    return (
      <div data-test="component-congrats" className="alert alert-success">
        <span data-test="congrats-message">
          {stringsModule.getStringByLanguage(language, "congrats")}
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats"></div>;
  }
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

// child de APP.js
//APP irá passar success para Congrats.js via props

export default Congrats;
