
// import { mount, shallow } from "enzyme";
import * as React from "react";
import {easings} from "../../src/helpers/easings";
import "../__mocks__/setupTests";

describe("easings functions helper", () => {

    it("should return correct result", () => {
        expect(easings.easeInCubic(1)).toBe(1);
    });

});
