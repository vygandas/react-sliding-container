import * as React from "react";
import SlidingContainer from "../src/index";
import "./__mocks__/setupTests";
import { shallow } from "enzyme";

describe("<SlidingContainer/>", () => {

    it("should render without throwing an error", () => {
        expect(shallow(<SlidingContainer/>).find(".react-sliding-container").exists()).toBe(true);
    });

});
