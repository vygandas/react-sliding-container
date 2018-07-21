import * as React from "react";

export interface ISlideProps {
  children?: React.ReactElement<any> | HTMLElement;
  backgroundImage?: string;
  style?: {[key: string]: string | number};
  id?: string;
}

/**
 * Slide component where you can place your own
 */
export default class Slide extends React.Component<ISlideProps, {}> {
  constructor(props: ISlideProps) {
    super(props);
  }
  public render(): JSX.Element {
    return (
      <div
        id={this.props.id}
        className="react-sliding-container-slide"
        style={{ backgroundImage: this.props.backgroundImage, ...this.props.style }}
      >
        <div className="react-sliding-container-slide-inner">
          <div className="react-sliding-container-slide-content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}