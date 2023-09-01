import * as React from "react";
import { shallow } from "enzyme";
import StepOne from "./StepOne";

describe("StepOne", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<StepOne />);
    expect(wrapper).toMatchSnapshot();
  });
});
