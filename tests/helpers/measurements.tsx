import * as React from "react";
import "../__mocks__/setupTests";
import { shallow, mount } from "enzyme";
import {measurements} from "../../src/helpers/measurements";

describe("Circular helper function", () => {

    it("should return correct elements with only arr/list passed", () => {
        // const El = class E extends React.Component {
        //     render() {
        //        return <div style={{ width: '500px', height: '300px' }}>
        //                  <h1>Hello World!</h1>
        //                  <p>This is my dumb React Component.</p>
        //               </div>
        //     }
        // };
        // const e = shallow(<El/>);
        // const result = measurements(e.getDOMNode());
        // expect(shallow(<El/>).find('h1')).toBe('a');
    });

});
