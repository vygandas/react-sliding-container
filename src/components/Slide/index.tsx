import * as React from "react";

export interface ISlideProps {
  children?: React.ReactElement<any> | HTMLElement;
}

/**
 * Sliding container allows you to have a slider with your custom components inside of it.
 */
export default class Slide extends React.Component<ISlideProps, {}> {
  constructor(props: ISlideProps) {
    super(props);
  }
  public render(): JSX.Element {
    return (
      <div className="react-sliding-container-slide">
        <div className="react-sliding-container-slide-inner">
          <div className="react-sliding-container-slide-content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}