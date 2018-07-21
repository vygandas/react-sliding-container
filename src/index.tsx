import * as React from "react";
import * as ReactDOM from "react-dom";
import Arrow from "./components/Arrow";
import { ARROW_LEFT, ARROW_RIGHT } from "./components/Arrow/types";
import Slide from "./components/Slide";
import { IMeasurements, measurements } from "./helpers/measurements";

export * from "./components/Slide";
export * from "./components/Arrow";

export interface ISlidingContainerProps {
  options?: {
    className?: string;
    height?: string;
    width?: string;
    stopPropagation?: boolean;
    leftArrow?: React.ReactElement<any>;
    rightArrow?: React.ReactElement<any>;
    bullet?: string;
    slideXMarginPx?: number;
    showArrows?: boolean;
  };
  children?: Array<React.ReactElement<Slide>> | React.ReactElement<Slide>;
}

const defaultOptions: ISlidingContainerProps['options'] = {
  className: null,
  width: '100%',
  height: '250px',
  stopPropagation: true,
  leftArrow: <Arrow symbol='◄' type={ARROW_LEFT}/>,
  rightArrow: <Arrow symbol='►' type={ARROW_RIGHT}/>,
  bullet: '○',
  slideXMarginPx: 50,
  showArrows: true
};

/**
 * Sliding container allows you to have a slider with your custom components inside of it.
 */
export default class SlidingContainer extends React.Component<ISlidingContainerProps, {}> {
  private options: ISlidingContainerProps['options'] = null;
  private calculatedMeasurements: IMeasurements = null;
  private containerStyle = {};
  constructor(props: ISlidingContainerProps) {
    super(props);
  }
  public componentWillMount(): void {
    this.options = {...defaultOptions, ...this.props.options};
  }
  public componentDidMount(): void {
    this.calculatedMeasurements = measurements(document, this.options.slideXMarginPx);
    this.containerStyle = this.calculatedMeasurements ? {
      left: this.calculatedMeasurements.slide.left,
      right: this.calculatedMeasurements.slide.right,
    } : {};
    this.forceUpdate();
  }
  public render(): JSX.Element {
    // console.log("SlidingContainer render() this.props.children", this.props.children);
    console.log("SlidingContainer render() containerStyle", this.containerStyle);
    return (
      <div
        id="react-sliding-container"
        className={this.options.className}
        style={{ width: this.options.width, height: this.options.height }}
      >
        <div id="rscawl">
          {this.isShowArrows() && this.options.leftArrow}
        </div>
        <div className="react-sliding-container-inner" style={this.containerStyle}>
          {this.props.children}
        </div>
        <div id="rscawr">
          {this.isShowArrows() && this.options.showArrows && this.options.rightArrow}
        </div>
      </div>
    );
  }
  private isShowArrows(): boolean {
    const children = React.Children.toArray(this.props.children);
    return this.options.showArrows && this.props.children && children.length > 1;
  }
}