import * as React from "react";
import SlidingContainer from "../src/SlidingContainer";
import "./__mocks__/setupTests";
import { shallow } from "enzyme";

describe("<SlidingContainer/>", () => {

    it("should render without throwing an error", () => {
        expect(shallow(<SlidingContainer/>).find(".react-sliding-container").exists()).toBe(true);
    });

});
