import * as React from "react";
import Slide from "./components/Slide";
import Arrow from "./components/Arrow";
import { ARROW_LEFT, ARROW_RIGHT } from "./components/Arrow/types";

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
  };
  children?: Array<React.ReactElement<Slide>> | React.ReactElement<Slide>;
}

const defaultProps: ISlidingContainerProps['options'] = {
  className: null,
  width: '100%',
  height: '250px',
  stopPropagation: true,
  leftArrow: <Arrow symbol='◄' type={ARROW_LEFT}/>,
  rightArrow: <Arrow symbol='►' type={ARROW_RIGHT}/>,
  bullet: '○'
};

/**
 * Sliding container allows you to have a slider with your custom components inside of it.
 */
export default class SlidingContainer extends React.Component<ISlidingContainerProps, {}> {
  private settings: ISlidingContainerProps['options'] = null;
  constructor(props: ISlidingContainerProps) {
    super(props);
  }
  componentWillMount() {
    this.settings = {...defaultProps, ...this.props.options};
  }
  public render(): JSX.Element {
    return (
      <div
        className={`react-sliding-container ${this.settings.className}`}
        style={{ width: this.settings.width, height: this.settings.height }}
      >
        {this.settings.leftArrow}
        <div className="react-sliding-container-inner">
          {this.props.children}
        </div>
        {this.settings.rightArrow}
      </div>
    );
  }
}