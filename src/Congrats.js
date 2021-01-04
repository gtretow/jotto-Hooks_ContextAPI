//functional component with no class - gonna receive value via props and show the congrats message if success is true
import React from "react";
import PropTypes from "prop-types";

/* Functional react component for congratulatory message 
@function 
@param {object} props - react props
@returns {JSX.Element} rendered component
 */

const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats"></div>;
  }

};

Congrats.propTypes = {
    success: PropTypes.bool.isRequired,
}


// child de APP.js
//APP irá passar success para Congrats.js via props

export default Congrats;
