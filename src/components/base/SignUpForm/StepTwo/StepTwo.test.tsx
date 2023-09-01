import * as React from "react";
import { shallow } from "enzyme";
import StepTwo from "./StepTwo";

describe("StepTwo", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<StepTwo />);
    expect(wrapper).toMatchSnapshot();
  });
});
