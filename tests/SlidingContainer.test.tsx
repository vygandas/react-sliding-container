import { shallow } from "enzyme";
import * as React from "react";
import Slide from "../src/components/Slide";
import SlidingContainer from "../src/index";
import "./__mocks__/setupTests";

describe("<SlidingContainer/>", () => {

    it("should render without throwing an error and have a class 'react-sliding-container'", () => {
        expect(shallow(<SlidingContainer/>).find("#react-sliding-container").exists()).toBe(true);
    });

    it("should accept one <Slide/> components inside and not fail", () => {
        const oneSlide = shallow(
            <SlidingContainer>
                <Slide/>
            </SlidingContainer>
        );
        expect(oneSlide.find("#react-sliding-container").exists()).toBe(true);
    });

    it("should accept one <Slide/> components with content inside and not fail", () => {
        const oneSlide = shallow(
            <SlidingContainer>
                <Slide>
                    <div>Success</div>
                </Slide>
            </SlidingContainer>
        );
        expect(oneSlide.find("#react-sliding-container").exists()).toBe(true);
    });

});
