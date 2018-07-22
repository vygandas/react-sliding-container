// tslint:disable-next-line:no-implicit-dependencies
import { shallow } from "enzyme";
import * as React from "react";
import Slide from "../src/components/Slide";
import "./__mocks__/setupTests";

describe("<Slide/>", () => {

    it("should render without throwing an error and have a class 'react-sliding-container-slide'", () => {
        expect(shallow(<Slide id={'1'}/>).find(".react-sliding-container-slide").exists()).toBe(true);
    });

    it("should render with html element", () => {
        expect(shallow(<Slide><div/></Slide>).find(".react-sliding-container-slide").exists()).toBe(true);
    });

    it("should render with react element", () => {
        // tslint:disable-next-line:no-shadowed-variable
        const MyDumbComponent = class MyDumbComponent extends React.Component {
            public render() {
               return <div>
                         <h1>Hello World!</h1>
                         <p>This is my dumb React Component.</p>
                      </div>
            }
        };
        expect(shallow(<Slide><MyDumbComponent/></Slide>).find(".react-sliding-container-slide").exists()).toBe(true);
    });

    it("should fail rendering with text element", () => {
        // tslint:disable-next-line:no-unused-expression
        expect(shallow(<Slide>Labas</Slide>)).toThrowError;
    });

});
