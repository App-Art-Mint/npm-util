/**
 * Imports
 */
import sunSettings from './settings';
import { sunSide } from './imports/enums';

/**
 * Utility functions
 * @public
 */
export abstract class sunUtil {
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
     * Ensures that a function `func` is run only after not being called for `wait` milliseconds
     * @param func - the function to debounce
     * @param wait - the amount of time to wait before running the function
     */
    static debounce (func: Function, wait: number = sunSettings.delay.default) : Function {
        let timer: number;
        return function (e: any) {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(func, wait, e);
        }
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
     * Ensures that a function `func` is called at most every `wait` milliseconds with optional leading and trailing calls
     * @param func - the function to throttle
     * @param wait - the amount of time between function calls
     * @param options - leading and trailing options: default = \{ leading: true, trailing, true \}
     * @returns - the throttled function as an EventListener
     */
    static throttleEvent (func: Function,
                          wait: number = sunSettings.delay.default,
                          options?: {[key: string]: boolean}) : EventListener {
        return sunUtil.throttle(func, wait, options) as EventListener;
    }

    /**
     * Sets the element's height to its `innerHeight`, then to `auto` after a delay
     * @param el - the element whose height will be set
     */
    static show (el?: HTMLElement | null, delay: number = sunSettings.delay.default, from: sunSide = sunSide.Top) : void {
        if (el) {
            el.style.display = '';
            requestAnimationFrame(() => {
                if (from === sunSide.Top || from === sunSide.Bottom) {
                    el.style.height = `${el.scrollHeight}px`;
                } else {
                    el.style.width = `${el.scrollWidth}px`;
                }
                
                setTimeout(() => {
                    if (from === sunSide.Top || from === sunSide.Bottom) {
                        el.style.height = 'auto';
                    } else {
                        el.style.width = 'auto';
                    }
                }, delay);
            });
        }
    }

    /**
     * Sets the element's height to 0
     * @param el - the element whose height will be set
     */
    static hide (el?: HTMLElement | null, delay: number = sunSettings.delay.default, from: sunSide = sunSide.Top) : void {
        if (el) {
            let height = el.scrollHeight,
                width = el.scrollWidth,
                transition = el.style.transition;
            el.style.transition = '';
            requestAnimationFrame(() => {
                if (from === sunSide.Top || from === sunSide.Bottom) {
                    el.style.height = `${height}px`;
                } else {
                    el.style.width = `${width}px`;
                }
                
                el.style.transition = transition;
                requestAnimationFrame(() => {
                    if (from === sunSide.Top || from === sunSide.Bottom) {
                        el.style.height = '0';
                    } else {
                        el.style.width = '0';
                    }
                });
            });
            setTimeout(() => {
                el.style.display = 'none';
            }, delay);
        }
    }

    /**
     * Copies the provided text to the clipboard
     * @param this - the element that activates the event
     */
    static eCopyText (this: HTMLElement) : boolean {
        let text: string | null = this.getAttribute('sun-copy'),
            textArea: HTMLTextAreaElement = document.createElement('textarea');

        if (!text || !textArea) {
            return false;
        }

        textArea.value = text;
        textArea.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            transform: translate(-100%, -100%);
            opacity: 0;
            z-index: -1;
        `;

        document.body.appendChild(textArea);
        textArea.select();
        textArea.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(textArea.value);
        document.body.removeChild(textArea);

        return true;
    }
}
export default sunUtil;