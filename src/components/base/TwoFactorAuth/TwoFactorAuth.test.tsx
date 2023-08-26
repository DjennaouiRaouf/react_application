import * as React from "react";
import { shallow } from "enzyme";
import TwoFactorAuth from "./TwoFactorAuth";

describe("TwoFactorAuth", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TwoFactorAuth />);
    expect(wrapper).toMatchSnapshot();
  });
});
