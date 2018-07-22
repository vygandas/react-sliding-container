export interface ICircularThreeElements<T = any> {
    current: T;
    previous?: T;
    next?: T;
    length: number;
    position: number;
    calculatedChildren: T[];
    previousIndex: number;
    nextIndex: number;
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

export const getNextIndex = (list: any[], position: number) => {
    if (list.length > 2 && position === list.length - 1) {
        return 0;
    } else if (list.length > 2) {
        return position + 1;
    } else if (list.length === 2 && position === 0) {
        return position + 1;
    }
    return position;
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

export const getPreviousIndex = (list: any[], position: number): number => {
    if (list.length > 2 && position === 0) {
        return list.length - 1;
    } else if (list.length > 2) {
        return position - 1;
    } else if (list.length === 2 && position === list.length - 1) {
        return position - 1;
    }
    return position;
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
  const previous = getPrevious(list, position);
  const current = list[position];
  const next = getNext(list, position);
  const elements: ICircularThreeElements = {
      calculatedChildren: [
        previous,
        current,
        next
      ],
      current,
      length: list.length,
      next,
      nextIndex: getNextIndex(list, position),
      position,
      previous,
      previousIndex: getPreviousIndex(list, position)
      
  };
  return elements;  
}
