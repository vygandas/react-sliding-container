import * as React from "react";

interface ISlidingContainerProps {}

export default class SlidingContainer extends React.Component<ISlidingContainerProps, {}> {
  constructor(props: ISlidingContainerProps) {
    super(props);
  }
  render() {
    return <div className="react-sliding-container">Sliding container</div>;
  }
}