export interface IEasings {
    linear: (t: number) => number;
    easeInQuad: (t: number) => number;
    easeOutQuad: (t: number) => number;
    easeInOutQuad: (t: number) => number;
    easeInCubic: (t: number) => number;
    easeOutCubic: (t: number) => number;
    easeInOutCubic: (t: number) => number;
    easeInQuart: (t: number) => number;
    easeOutQuart: (t: number) => number;
    easeInOutQuart: (t: number) => number;
    easeInQuint: (t: number) => number;
    easeOutQuint: (t: number) => number;
    easeInOutQuint: (t: number) => number;
}


export const linear = 'linear';
export const easeInQuad = 'easeInQuad';
export const easeOutQuad = 'easeOutQuad';
export const easeInOutQuad = 'easeInOutQuad';
export const easeInCubic = 'easeInCubic';
export const easeOutCubic = 'easeOutCubic';
export const easeInOutCubic = 'easeInOutCubic';
export const easeInQuart = 'easeInQuart';
export const easeOutQuart = 'easeOutQuart';
export const easeInOutQuart = 'easeInOutQuart';
export const easeInQuint = 'easeInQuint';
export const easeOutQuint = 'easeOutQuint';
export const easeInOutQuint = 'easeInOutQuint';


export const easings: IEasings = {
    linear(t: number): number {
        return t;
    },
    easeInQuad(t: number): number {
        return t * t;
    },
    easeOutQuad(t: number): number {
        return t * (2 - t);
    },
    easeInOutQuad(t: number): number {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic(t: number): number {
        return t * t * t;
    },
    easeOutCubic(t: number): number {
        return (--t) * t * t + 1;
    },
    easeInOutCubic(t: number): number {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart(t: number): number {
        return t * t * t * t;
    },
    easeOutQuart(t: number): number {
        return 1 - (--t) * t * t * t;
    },
    easeInOutQuart(t: number): number {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
    },
    easeInQuint(t: number): number {
        return t * t * t * t * t;
    },
    easeOutQuint(t: number): number {
        return 1 + (--t) * t * t * t * t;
    },
    easeInOutQuint(t: number): number {
        return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
    }
};