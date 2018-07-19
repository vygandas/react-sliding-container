import * as React from "react";
import Slide from "./components/Slide";

export interface ISlidingContainerProps {
  options?: {};
  children?: React.ReactElement<Slide>[] | React.ReactElement<Slide>;
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
      <div className="react-sliding-container">Sliding container!!!</div>
    );
  }
}