import * as React from "react";
import { shallow } from "enzyme";
import MessageToast from "./MessageToast";

describe("MessageToast", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MessageToast />);
    expect(wrapper).toMatchSnapshot();
  });
});
