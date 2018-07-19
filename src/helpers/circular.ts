interface ICircularThreeElements<T = any> {
    current: T;
    previous?: T;
    next?: T;
    length: number;
    position: number;
}

/**
 * Get the next element of a list
 * @param list array of objects
 * @param position current position
 */
export const getNext = (list: any[], position: number) => {
    if (list.length > 2 && position === list.length - 1) {
        return list[0];
    } else if (list.length > 2) {
        return list[position + 1];
    } else if (list.length === 2 && position === 0) {
        return list[position + 1];
    }
    return null;
}

/**
 * Get previous element of a list
 * @param list array of objects
 * @param position current position
 */
export const getPrevious = (list: any[], position: number) => {
    if (list.length > 2 && position === 0) {
        return list[list.length - 1];
    } else if (list.length > 2) {
        return list[position - 1];
    } else if (list.length === 2 && position === list.length - 1) {
        return list[position - 1];
    }
    return null;
}

/**
 * Get previous, current and next elements of an array.
 * If current is the last element - returns first element for next.
 * If current is the first element - returns last element for previous.
 * If array lenth is 1 or 2 this function doesn't do the cicrle thing and returns
 * element without loop to the next side.
 * @param list array of objects
 * @param position position of current element that we need to calculate other
 */
export const circular = (list: any[], position: number = 0): ICircularThreeElements => {
  const elements: ICircularThreeElements = {
      current: null,
      previous: getPrevious(list, position),
      next: getNext(list, position),
      length: list.length,
      position
  };
  elements.current = list[position];
  return elements;  
}
