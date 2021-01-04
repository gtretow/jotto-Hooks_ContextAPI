import React, { Component } from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import { findByTestAttr } from "../test/testUtils";
import Congrats from "./Congrats";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/* Factory function para criar um ShallowWrapper para o Congrats Component 
@param {object} props - component props para esse setup
@returns {ShallowWrapper}
*/

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

test("renders without error", () => {});

test("renders no text when `success` prop is false", () => {});

test("renders non-empty congrats message when succes prop is true", () => {});
