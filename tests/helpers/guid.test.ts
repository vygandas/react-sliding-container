
// import { mount, shallow } from "enzyme";
import * as React from "react";
import {guid} from "../../src/helpers/guid";
import "../__mocks__/setupTests";

describe("guid function helper", () => {

    it("should return unique", () => {
        const g1 = guid();
        const g2 = guid();
        expect(g1).not.toBe(g2);
    });

});
