/**
 * Icon helper functions
 */
export abstract class mintIcon {
    /**
     * Default icons
     */
    static icons: {[key: string]: string} = {
        'a[href^="http"]': 'fas fa-up-right-from-square',
        'a[href^="mailto:"]': 'far fa-envelope',
        'a[href^="tel:"]': 'fas fa-phone-flip',
        'a[href^="sms:"]': 'far fa-message',

    };

    /**
     * Appends the given icon to the given selector
     */
    static append (icon: string, selector: string) : void {
        let items: NodeListOf<HTMLElement> = document.querySelectorAll(selector);
        items.forEach((item: HTMLElement) => {
            let currentIcon: HTMLElement | null = item.querySelector('i'),
                iconElement: HTMLElement = document.createElement('i');
            iconElement.classList.add(...icon.split(' '));
            if (currentIcon) {
                item.replaceChild(iconElement, currentIcon);
            } else {
                item.appendChild(iconElement);
            }
        });
    }
};
export default mintIcon;
