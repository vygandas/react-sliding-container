// Idea borrowed from http://www.javascriptkit.com/javatutors/touchevents2.shtml
// and translated to TypeScript

export const swipedetect = (el: HTMLElement, callback: (swipedir: string) => {}|void): void => {
 
    const touchsurface = el;
    let swipedir: 'left'|'right'|'up'|'down'|'none';
    let startX: number;
    let startY: number;
    let dist: number;
    let distX: number;
    let distY: number;
    const threshold = 10; // required min distance traveled to be considered swipe
    const restraint = 100; // maximum distance allowed at the same time in perpendicular direction
    const allowedTime = 300; // maximum time allowed to travel that distance
    let elapsedTime: number;
    let startTime: number;
    let touchobj;
    
    const handleswipe: (swipedir: string) => any = callback;

    const touchStartHandler = (e: any) => {
        touchobj = e.changedTouches[0];
        swipedir = 'none'
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        // e.preventDefault()
    };
    const touchMoveHandler = (e: any) => {
        e.preventDefault() // prevent scrolling when inside DIV
    };
    const touchEndHandler = (e: any) => {
        touchobj = e.changedTouches[0]
        distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        if (elapsedTime <= allowedTime){ // first condition for awipe met
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
                swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
            }
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
                swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
            }
        }
        handleswipe(swipedir);
        // e.preventDefault();
    };

    touchsurface.addEventListener('touchstart', touchStartHandler, false);
    touchsurface.addEventListener('touchmove', touchMoveHandler, false);
    touchsurface.addEventListener('touchend', touchEndHandler, false);
}
