import * as React from "react";

interface ISlidingContainerProps {
  options?: {};
}

/**
 * Sliding container allows you to have a slider with your custom components inside of it.
 */
export default class SlidingContainer extends React.Component<ISlidingContainerProps, {}> {
  constructor(props: ISlidingContainerProps) {
    super(props);
  }
  public render() {
    return <div className="react-sliding-container">Sliding container</div>;
  }
}