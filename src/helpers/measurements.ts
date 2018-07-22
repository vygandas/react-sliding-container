import { ISlidingContainerProps } from "../index";

export interface IMeasurements {
    wrapper: {
        width: number;
    };
    arrows: {
        left: {
            width: number;
        },
        right: {
            width: number;
        }
    };
    slide: {
        width: number;
        left: number;
        right: number;
    };
};

export const measurements = (doc: Document, margin: number): IMeasurements => {
    const wrapper = doc.querySelector('#react-sliding-container');
    const leftArrow = doc.querySelector('#rscawl>div');
    const rightArrow = doc.querySelector('#rscawl>div');

    const wrapperWidth = wrapper ? wrapper.clientWidth : null;
    const leftArrowWidth = leftArrow ? leftArrow.clientWidth : null;
    const rightArrowWidth = rightArrow ? rightArrow.clientWidth : null;
    return {
        arrows: {
            left: {
                width: leftArrowWidth,
            },
            right: {
                width: rightArrowWidth,
            }
        },
        slide: {
            left: leftArrowWidth + margin,
            right: rightArrowWidth + margin,
            width: wrapperWidth - leftArrowWidth - rightArrowWidth - (margin * 2),
        },
        wrapper: {
            width: wrapperWidth,
        }
    };
}