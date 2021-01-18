import React from "react";

import { mount } from "enzyme";
import App from "./App";
import { findByTestAttr } from "../test/testUtils";

import hookActions from "./actions/hookActions";

const mockGetSecretWord = jest.fn();

const setup = () => {
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;

  ////usando mount ao invés de shallow pois o enzyme não usa useEffect no shallow (no momento)
  //https://github.com/airbnb/enzyme/issues/2086

  return mount(<App />);
};

it("App renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-app");
  expect(component.length).toBe(1);
});

describe("getSecretWord calls", () => {
  test("getSecretWord gets called on app mount", () => {
    setup();

    //check to see if secret word was updated
    expect(mockGetSecretWord).toHaveBeenCalled();
  });

  test("secretWord does not update on app update", () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();
    wrapper.setProps();

    expect(mockGetSecretWord).not.toHaveBeenCalled();
  });
});
