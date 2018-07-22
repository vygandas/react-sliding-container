import {easeInQuad, easings, IEasings} from "./easings";

let animating: boolean = false;

const isElementWindow = (element: any) => {
    return element.toString() === '[object Window]';
}

// declare global {
//     // tslint:disable-next-line:interface-name
//     interface Window {
//         pageXOffset: number;
//         pageYOffset: number;
//         scrollTo: (a: number, b: number) => any;
//         requestAnimationFrame: (f: () => any) => any;
//     }
//     // tslint:disable-next-line:interface-name
//     interface HTMLElement {
//         scrollLeft: number;
//         scrollTop: number;
//     }
// }

export const scrollTo = async (
    element: HTMLElement | Window,
    to: number,
    callback: () => void,
    duration: number = 1000,
    direction: "horizontal"|"vertical" = "horizontal",
    easingType: keyof IEasings = easeInQuad
): Promise<void> => {
    const promise = new Promise<void>((resolve, reject) => {
        if (animating || !element || to === undefined) {
            return false;
        }

        const end = +new Date() + duration;
        let from = (isElementWindow(element)) ? (element as Window).pageXOffset : (element as HTMLElement).scrollLeft;
        animating = true;
        
        if (direction === 'vertical') {
            from = (isElementWindow(element)) ? (element as Window).pageYOffset : (element as HTMLElement).scrollTop;
        }
        const step = async () => {
            if (!animating) { return resolve(callback()); }
            const current = +new Date();
            const remaining = end - current;
            if (remaining < 0) {
                animating = false;
                return resolve(callback());
            } else {
                const ease = easings[easingType](1 - remaining / duration);

                if (!direction || direction === "horizontal") {
                    (isElementWindow(element))
                        ? (element as Window).scrollTo(from + (ease * (to-from)), (element as Window).pageYOffset)
                        : (element as HTMLElement).style.marginLeft = `${from + (ease * (to-from))}px`;
                } else if (direction === "vertical") {
                    (isElementWindow(element))
                        ? (element as Window).scrollTo((element as Window).pageXOffset, from + (ease * (to-from)))
                        : (element as HTMLElement).style.marginTop = `${from + (ease * (to-from))}px`;
                }
            }
            await requestAnimationFrame(step);
        };

        if (!animating) {
            return true;
        }

        step();
    });
    return promise;
};
