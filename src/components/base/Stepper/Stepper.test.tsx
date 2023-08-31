import * as React from "react";
import { shallow } from "enzyme";
import Stepper from "./Stepper";

describe("Stepper", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Stepper steps={[]}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
