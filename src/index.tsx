import * as React from "react";
import * as ReactDOM from "react-dom";
import Arrow from "./components/Arrow";
import { ARROW_LEFT, ARROW_RIGHT } from "./components/Arrow/types";
import Slide from "./components/Slide";
import { circular } from "./helpers/circular";
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
  leftArrow: <Arrow symbol='◄' />,
  rightArrow: <Arrow symbol='►' />,
  bullet: '○',
  slideXMarginPx: 20,
  showArrows: true
};

/**
 * Sliding container allows you to have a slider with your custom components inside of it.
 */
export default class SlidingContainer extends React.Component<ISlidingContainerProps, {}> {
  private options: ISlidingContainerProps['options'] = null;
  private calculatedMeasurements: IMeasurements = null;
  private containerStyle = {};
  private slides: React.ReactChild[] = [];
  private activeSlideIndex: number = 0;
  constructor(props: ISlidingContainerProps) {
    super(props);
    this.updateCurrentSlideIndex = this.updateCurrentSlideIndex.bind(this);
  }
  public componentWillMount(): void {
    this.options = {...defaultOptions, ...this.props.options};
    this.slides = React.Children.toArray(this.props.children);
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
    const circulated = circular(this.slides, this.activeSlideIndex);
    return (
      <div
        id="react-sliding-container"
        className={this.options.className}
        style={{ width: this.options.width, height: this.options.height }}
      >
        <div id="rscawl">
          {this.isShowArrows() && React.cloneElement(this.options.leftArrow, {
            clickHandlerCallback: () => { this.updateCurrentSlideIndex(circulated.previousIndex) },
            type: ARROW_LEFT
          })}
        </div>
        <div className="react-sliding-container-inner" style={this.containerStyle}>
          {circulated.calculatedChildren.map((child, i) => React.cloneElement(
            child,
            {
              id: `slide-${i}`,
              style: {...child.props.style, ...{
                left: `${this.calculateLeft(i)}px`,
                width: `${this.calculatedMeasurements ? this.calculatedMeasurements.slide.width : 0}px`
              }}
            }
          ))}
        </div>
        <div id="rscawr">
          {this.isShowArrows() && this.options.showArrows && React.cloneElement(this.options.rightArrow, {
            clickHandlerCallback: () => { this.updateCurrentSlideIndex(circulated.nextIndex) },
            type: ARROW_RIGHT
          })}
        </div>
      </div>
    );
  }
  private updateCurrentSlideIndex(index: number): void {
    console.log("SlidingContainer updateCurrentSlideIndex executed");
    this.activeSlideIndex = index;
    this.forceUpdate();
  }
  private calculateLeft(slideIndex: number): number {
    if (this.calculatedMeasurements === null) { return 0; }
    switch (slideIndex) {
      case 0: return -(this.calculatedMeasurements.slide.width + this.options.slideXMarginPx * 2);
      case 1: return 0;
      case 2: return this.calculatedMeasurements.slide.width + this.options.slideXMarginPx * 2;
      default: throw new Error(`Method calculateLeft of component SlidingContainer received unexpected index [${slideIndex}].`);
    }
  }
  private isShowArrows(): boolean {
    return this.options.showArrows && this.slides.length > 1;
  }
}