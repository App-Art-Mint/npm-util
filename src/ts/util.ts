/**
 * Imports
 */
import sunSettings from "./settings";

/**
 * Utility functions
 * @public
 */
export default abstract class sunUtil {
    /**
     * Returns the width of the window, including fractional pixels
     * @returns the width of the window
     */
    static windowWidth () : number {
        let body: HTMLBodyElement = document.getElementsByTagName('body')[0],
            decimal: number = body.getBoundingClientRect().width % 1;
        return window.innerWidth + decimal;
    }

    /**
     * Ensures that a function `func` is called at most every `wait` milliseconds with optional leading and trailing calls
     * @param func - the function to throttle
     * @param wait - the amount of time between function calls
     * @param options - leading and trailing options: default = \{ leading: true, trailing, true \}
     * @returns - the throttled function
     */
    static throttle (func: Function,
                     wait: number = sunSettings.delay.default,
                     options?: {[key: string]: boolean}) : Function {
        let context: any, args: any, result: any,
            timeout: number, previous: number = 0,
            later: Function = function () {
                previous = options?.leading === false ? 0 : new Date().getTime();
                timeout = 0;
                result = func.apply(context, args);
                if (!timeout) {
                    context = args = null;
                }
            },
            throttled: Function = function (this: any): any {
                let now: number = new Date().getTime();
                if (!previous && options?.leading === false) {
                    previous = now;
                }
                let remaining: number = wait - now + previous;
                context = this;
                args = arguments;
                if (remaining <= 0 || remaining > wait) {
                    if (timeout) {
                        clearTimeout(timeout);
                        timeout = 0;
                    }
                    previous = now;
                    result = func.apply(context, args);
                    if (!timeout) {
                        context = args = null;
                    }
                } else if (!timeout && options?.trailing !== false) {
                    timeout = window.setTimeout(later, remaining);
                }
                return result;
            };

        return throttled;
    }

    /**
     * Sets the element's height to its `innerHeight`, then to `auto` after a delay
     * @param el - the element whose height will be set
     */
    static show (el?: HTMLElement | null) : void {
        if (el) {
            el.style.display = '';
            el.style.height = `${el.scrollHeight}px`;
            setTimeout(() => {
                el.style.height = 'auto';
            }, sunSettings.delay.default);
        }
    }

    /**
     * Sets the element's height to 0
     * @param el - the element whose height will be set
     */
    static hide (el?: HTMLElement | null) : void {
        if (el) {
            let height = el.scrollHeight,
                transition = el.style.transition;
            el.style.transition = '';
            requestAnimationFrame(function () {
                el.style.height = `${height}px`;
                el.style.transition = transition;
                requestAnimationFrame(function () {
                    el.style.height = '0px';
                });
            });
            setTimeout(() => {
                el.style.display = 'none';
            }, sunSettings.delay.default);
        }
    }
}