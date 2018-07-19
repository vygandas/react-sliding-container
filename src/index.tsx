import * as React from "react";
import Slide from "./components/Slide";

export interface ISlidingContainerProps {
  options?: {
    className?: string;
    stopPropagation?: boolean;
  };
  children?: Array<React.ReactElement<Slide>> | React.ReactElement<Slide>;
}

/**
 * Sliding container allows you to have a slider with your custom components inside of it.
 */
export default class SlidingContainer extends React.Component<ISlidingContainerProps, {}> {
  constructor(props: ISlidingContainerProps) {
    super(props);
  }
  public render(): JSX.Element {
    return (
      <div className={`react-sliding-container ${this.props.options && this.props.options.className}`}>
        <div className="react-sliding-container-inner">
          {this.props.children}
        </div>
      </div>
    );
  }
}