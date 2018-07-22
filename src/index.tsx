import * as React from "react";
import * as ReactDOM from "react-dom";
import Arrow from "./components/Arrow";
import { ARROW_LEFT, ARROW_RIGHT } from "./components/Arrow/types";
import Slide from "./components/Slide";
import { circular, ICircularThreeElements } from "./helpers/circular";
import { easeInQuad, IEasings } from "./helpers/easings";
import { IMeasurements, measurements } from "./helpers/measurements";
import {scrollTo} from "./helpers/scrollTo";
import { swipedetect } from "./helpers/swipedetect";

export * from "./components/Slide";
export * from "./components/Arrow";
export * from "./helpers/easings";

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
    slideTime?: number;
    slidingType?: keyof IEasings 
  };
  children?: Array<React.ReactElement<Slide>> | React.ReactElement<Slide>;
}

const defaultOptions: ISlidingContainerProps['options'] = {
  bullet: '○',
  className: null,
  height: '250px',
  leftArrow: <Arrow symbol='◄' />,
  rightArrow: <Arrow symbol='►' />,
  showArrows: true,
  slideTime: 500,
  slideXMarginPx: 20,
  slidingType: easeInQuad,
  stopPropagation: true,
  width: '100%',
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
  private circulated: ICircularThreeElements<any> = null;
  constructor(props: ISlidingContainerProps) {
    super(props);
    this.updateCurrentSlideIndex = this.updateCurrentSlideIndex.bind(this);
  }
  public componentWillMount(): void {
    this.options = {...defaultOptions, ...(
      this && typeof this.props !== typeof undefined
      && typeof this.props.options !== typeof undefined
        ? this.props.options
        : {}
    )};
    this.slides = this && typeof this.props !== typeof undefined
      && typeof this.props.children !== typeof undefined && this.props.children
        ? React.Children.toArray(this.props.children)
        : [];
  }
  public componentDidMount(): void {
    this.calculatedMeasurements = measurements(document, this.options.slideXMarginPx);
    this.containerStyle = this.calculatedMeasurements ? {
      left: this.calculatedMeasurements.slide.left,
      marginLeft: 0,
      right: this.calculatedMeasurements.slide.right
    } : {};
    this.forceUpdate();

    const innerContainer = document.getElementById("innerContainer");
    if (innerContainer !== null) {
      swipedetect(document.getElementById("innerContainer"), (swipedir: string) => {
        if (swipedir === 'left') {
          this.updateCurrentSlideIndex(this.circulated.nextIndex, "right")
        }
        if (swipedir === 'right') {
          this.updateCurrentSlideIndex(this.circulated.previousIndex, "left")
        }
      });
    }
  }
  public render(): JSX.Element {
    this.circulated = circular(this.slides, this.activeSlideIndex);
    return (
      <div
        id="react-sliding-container"
        className={this.options.className}
        style={{ width: this.options.width, height: this.options.height }}
      >
        <div id="rscawl">
          {this.isShowArrows() && React.cloneElement(this.options.leftArrow, {
            clickHandlerCallback: () => { this.updateCurrentSlideIndex(this.circulated.previousIndex, "left") },
            type: ARROW_LEFT
          })}
        </div>
        <div id="innerContainer" className="react-sliding-container-inner" style={this.containerStyle}>
          {this.circulated.calculatedChildren
            && this.circulated.calculatedChildren.length > 0
            && this.circulated.calculatedChildren[0] !== null
            && this.circulated.calculatedChildren[1] !== undefined
            && this.circulated.calculatedChildren.map((child: React.ReactElement<any>, i: number) => React.cloneElement(
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
            clickHandlerCallback: () => { this.updateCurrentSlideIndex(this.circulated.nextIndex, "right") },
            type: ARROW_RIGHT
          })}
        </div>
      </div>
    );
  }
  private updateCurrentSlideIndex(index: number, direction: "left"|"right") {
    const moveBy = (this.calculatedMeasurements.slide.width + this.options.slideXMarginPx * 2) * (direction === "left" ? 1 : -1);
    this.activeSlideIndex = index;
    scrollTo(document.getElementById("innerContainer"), moveBy, () => {
      this.forceUpdate();
      document.getElementById("innerContainer").style.marginLeft = null;
    }, this.options.slideTime, "horizontal").then();
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