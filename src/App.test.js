import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders learn react link", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toBeTruthy();
});

// 1. console로 해당 돔을 보여준다.
// console.log(wrapper.debug());

// 2. toBeTruthy : true를 판단
// expect(wrapper).toBeTruthy();

// 2. toBeFalsy : false를 판단
// expect(wrapper).toBeFalsy();