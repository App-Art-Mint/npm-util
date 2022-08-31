/**
 * Color
 */
export class sunColor {
    protected static hexBase: number = 16;
    protected static hexMax: string = 'FF';
    public r: number;
    public g: number;
    public b: number;
    public a: number;

    constructor (args: {[key: string]: number | string}) {
        this.r = typeof args.r === 'number' ? Math.max(Math.min(args.r, sunColor.hexBase ** 2 - 1), 0) : 0;
        this.g = typeof args.g === 'number' ? Math.max(Math.min(args.g, sunColor.hexBase ** 2 - 1), 0) : 0;
        this.b = typeof args.b === 'number' ? Math.max(Math.min(args.b, sunColor.hexBase ** 2 - 1), 0) : 0;
        this.a = typeof args.a === 'number' ? Math.max(Math.min(args.a, 1), 0) : 1;
        if (typeof args.color === 'string') {
            this.stringConstructor(args.color);
        }
    }

    /**
     * Constructor from a string argument
     */
    protected stringConstructor (str: string) : void {
        if (str.startsWith('#')) {
            this.hexConstructor(str);
        } else {
            if (~str.indexOf('linear-gradient')) {
                str = str.substring(str.indexOf('linear-gradient'), str.length);
            }
            this.rgbConstructor(str);
        }
    }

    /**
     * Constructor from a hex argument
     */
    protected hexConstructor (hex: string) : void {
        switch (hex.length) {
            case 1:
            case 5:
            case 6:
                return;
            case 2:
                hex = '#' + hex[1] + hex[1] + hex[1] + hex[1] + hex[1] + hex[1] + sunColor.hexMax;
                break;
            case 3:
                hex = '#' + hex[1] + hex[1] + hex[1] + hex[2] + hex[2] + hex[2] + sunColor.hexMax;
                break;
            case 4:
                hex = '#' + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3] + sunColor.hexMax;
                break;
            case 7:
                hex += sunColor.hexMax;
                break;
            case 8:
                hex += hex[hex.length - 1];
                break;
            default:
                hex = hex.substring(0, 9);
        }

        this.r = parseInt(hex.substring(1, 3), sunColor.hexBase);
        this.g = parseInt(hex.substring(3, 5), sunColor.hexBase);
        this.b = parseInt(hex.substring(5, 7), sunColor.hexBase);
        this.a = parseInt(hex.substring(7, 9), sunColor.hexBase) / sunColor.hexBase ** 2;
    }

    /**
     * Constructor from an rgba argument
     */
    protected rgbConstructor (rgb: string) : void {
        let match: RegExpMatchArray | null = rgb.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d*)?)\))?/);
        if (match) {
            this.r = parseInt(match[1]);
            this.g = parseInt(match[2]);
            this.b = parseInt(match[3]);
            this.a = parseFloat(match[4]);
        }
    }

    /**
     * Returns the perceived brightness of the color
     */
    getBrightness () : number {
        if (this.a === 0) {
            return 262;
        }
        if (!isNaN(this.r) && !isNaN(this.g) && !isNaN(this.b)) {
            return Math.round((this.r * 299 + this.g * 587 + this.b * 144) / 1000);
        }
        return -1;
    }
}
export default sunColor;