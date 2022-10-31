/**
 * CSS-selector helpers
 * @public
 */
export abstract class sunSelectors {
    /**
     * The library name that will be added as a prefix
     */
    static lib: string = 'sun';

    /**
     * The prefix built from the library name
     */
    static pre: string = `${this.lib}-`;

    /**
     * CSS-selector for disabled elements
     */
    static disabled: string = '[disabled]';

    /**
     * CSS-selector for elements with an aria-controls attribute
     */
    static hasControls: string = '[aria-controls]';

    /**
     * CSS-selector for elements with an aria-expanded attribute
     */
    static hasExpanded: string = '[aria-expanded]';

    /**
     * CSS-selector for elements with an href attribute
     */
    static hasLink: string = '[href]';

    /**
     * CSS-selector for elements with a routerLink attribute
     */
    static hasRouterLink: string = '[routerLink]';

    /**
     * CSS-selector for elements with an id attribute
     */
    static hasId: string = '[id]';

    /**
     * CSS-selector for elements that aren't tabbable (i.e. tabindex is negative)
     */
    static notTabbable: string = '[tabindex^="-"]';

    /**
     * CSS-selector for elements that are tabbable (i.e. tabindex isn't negative)
     */
    static tabbable: string = `[tabindex]${this.neg(this.notTabbable)}`;

    /**
     * CSS-selector for elements that can receive focus
     */
    static focusable: string = `input${this.neg(this.disabled)}${this.neg(this.notTabbable)},
                                select${this.neg(this.disabled)}${this.neg(this.notTabbable)},
                                textarea${this.neg(this.disabled)}${this.neg(this.notTabbable)},
                                button${this.neg(this.disabled)}${this.neg(this.notTabbable)},
                                object${this.neg(this.disabled)}${this.neg(this.notTabbable)},
                                a${this.hasLink}, a${this.hasRouterLink},
                                area${this.hasLink},
                                ${this.tabbable}`.replace(/\s/g, '');

    /**
     * Ids
     */
    static ids: {[key: string]: string | {[key: string]: string}};

    /**
     * Classes
     */
    static classes: {[key: string]: string | {[key: string]: string}} = {
        sides: {
            top: this.prefix('top'),
            right: this.prefix('right'),
            bottom: this.prefix('bottom'),
            left: this.prefix('left')
        }
    };

    /**
     * Adds the library prefix to the beginning of the provided string
     * @param base - the string to be prefixed
     * @returns - the provided string prefixed with the library name
     */
    static prefix (base: string) : string {
        base = base.toLowerCase();
        return base.startsWith(this.pre) ? base : `${this.pre}${base}`;
    }

    /**
     * Adds two dashes to the beginning of the provided string
     * @param base - the string to be prefixed
     * @returns - the provided string prefixed with two dashes
     */
    static cssPrefix (base: string) : string {
        return `--${this.prefix(base.replace(/^-+/, ''))}`;
    }

    /**
     * Turns the provided string into a CSS variable call
     * @param base - the name of the CSS variable to call
     * @returns - the CSS variable call for the provided string
     */
    static cssVar (base: string) : string {
        return `var(${this.cssPrefix(base)})`;
    }

    /**
     * Negates the provided CSS selector
     * @param base - the CSS selector to negate
     * @returns - the negated CSS selector
     */
    static neg (base: string) : string {
        return `:not(${base})`;
    }

    /**
     * Generates a class CSS selector
     * @param base - the name of the class to generate
     * @returns - the generated CSS selector
     */
    static class (base: string) : string {
        return `.${this.prefix(base)}`;
    }

    /**
     * Generates an id CSS selector
     * @param base - the name of the id to generate
     * @returns - the generated CSS selector
     */
    static id (base: string) : string {
        return `#${this.prefix(base)}`;
    }

    /**
     * Generates an aria-controls CSS selector
     * @param id - the id of the controlled element
     * @returns - the generated CSS selector
     */
    static controls (id?: string | null) : string {
        return id ? `[aria-controls="${this.prefix(id)}"]` : this.hasControls;
    }

    /**
     * Generates an aria-expanded CSS selector
     * @param bool - whether the element is expanded or not
     * @returns - the generated CSS selector
     */
    static expanded (bool?: boolean | null) : string {
        return typeof bool === 'boolean' ? `[aria-expanded="${bool}"]` : this.hasExpanded;
    }

    /**
     * Returns the id of the requested element
     */
    static getId (id?: string) : string {
        return this.ids[id ?? -1] as string ?? '';
    }

    /**
     * Returns the class of the requested element
     */
    static getClass (className?: string, classGroup?: string) : string {
        if (classGroup) {
            let group: {[key: string]: string} = this.classes[classGroup] as {[key: string]: string};
            return group[className ?? -1] ?? '';
        }
        return this.classes[className ?? -1] as string ?? '';
    }

    /**
     * Returns a NodeList of HTMLElements within the given element that are focusable
     * @param el - the element whose focusable children will be returned
     * @returns - the elements within the given element that are focusable
     */
    static getFocusables (el?: HTMLElement) : HTMLElement[] {
        let focusables: HTMLElement[];
        if (el) {
            focusables = [...el.querySelectorAll<HTMLElement>(this.focusable)];
        } else {
            focusables = [...document.querySelectorAll<HTMLElement>(this.focusable)];
        }

        focusables.filter((el: HTMLElement) => {
            return this.isFocusable(el);
        });

        return focusables;
    }

    /**
     * Returns true if an element is focusable and false if not,
     * based on styles (i.e. a parent has display: none;)
     * NOTE: Still need to determine what other styles may make an element un-focusable
     * @param el - the element
     * @returns - true if the element is focusable; false if not
     */
    static isFocusable (el: HTMLElement) : boolean {
        let current: HTMLElement | null = el;

        do {
            console.log(current.style.display, current);
            if (current.style.display.toLowerCase() === 'none') {
                return false;
            }
            current = current.parentElement;
        } while (current);
        return true;
    }
}
export default sunSelectors;