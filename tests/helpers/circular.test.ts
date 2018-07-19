import * as React from "react";
import "../__mocks__/setupTests";
import {circular, getNext, getPrevious} from "../../src/helpers/circular";

describe("Circular helper function", () => {

    it("should return correct elements with only arr/list passed", () => {
        const arr = ['a', 'b', 'c', 'd', 'e'];
        expect(circular(arr).current).toBe('a');
        expect(circular(arr).previous).toBe('e');
        expect(circular(arr).next).toBe('b');
        expect(circular(arr).length).toBe(5);
    });

    it("should return correct elements with position of last element set", () => {
        const arr = ['a', 'b', 'c', 'd', 'e'];
        expect(circular(arr, 4).current).toBe('e');
        expect(circular(arr, 4).previous).toBe('d');
        expect(circular(arr, 4).next).toBe('a');
        expect(circular(arr, 4).position).toBe(4);
    });

    it("should return correct elements with position of last element set when there are 2 elements", () => {
        const arr = ['a', 'b'];
        expect(circular(arr, 1).current).toBe('b');
        expect(circular(arr, 1).previous).toBe('a');
        expect(circular(arr, 1).next).toBe(null);
        expect(circular(arr, 0).current).toBe('a');
        expect(circular(arr, 0).previous).toBe(null);
        expect(circular(arr, 0).next).toBe('b');
    });

    it("should return correct elements when there are 1 elements", () => {
        const arr = ['a'];
        expect(circular(arr).current).toBe('a');
        expect(circular(arr).previous).toBe(null);
        expect(circular(arr).next).toBe(null);
    });

    it("should have correctly working next and previous arr el functions when arr has more than 2 elements", () => {
        const arr = ['a', 'b', 'c'];
        expect(getNext(arr, 0)).toBe('b');
        expect(getNext(arr, 2)).toBe('a');
        expect(getPrevious(arr, 0)).toBe('c');
        expect(getPrevious(arr, 2)).toBe('b');
    });

    it("should have correctly working next and previous arr el functions when arr has less than 3 elements", () => {
        const arr = ['a', 'b'];
        expect(getNext(arr, 0)).toBe('b');
        expect(getNext(arr, 1)).toBe(null);
        expect(getPrevious(arr, 0)).toBe(null);
        expect(getPrevious(arr, 1)).toBe('a');
    });

});
