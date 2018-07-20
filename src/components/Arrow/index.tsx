import * as React from "react";

export interface IArrowProps {
  symbol: React.ReactElement<any> | HTMLElement | string | null;
  type: string;
}

/**
 * Slide component where you can place your own
 */
export default class Arrow extends React.Component<IArrowProps, {}> {
  constructor(props: IArrowProps) {
    super(props);
  }
  public render(): JSX.Element {
    return (
      <div className={`react-sliding-container-arrow ${this.props.type}`}>
        <div className="react-sliding-container-arrow-inner">
          <div className="react-sliding-container-arrow-content">
            <span>
              {this.props.symbol}
            </span>
          </div>
        </div>
      </div>
    );
  }
}