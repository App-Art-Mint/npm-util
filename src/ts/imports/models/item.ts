/**
 * A generic item
 */
export class mintItem {
    /**
     * Item settings
     */
    version?: number = 0;
    priority?: number = 0;
    centered?: boolean = false;
    disabled?: boolean = false;
    
    /**
     * Item properties
     */
    id?: string;
    name?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    icon?: string;
    position?: string;
    transform?: string;

    /**
     * Item links
     */
    src?: string;
    href?: string;
    target?: string;
    routerLink?: string;
    
    /**
     * Item data
     */
    queryParams?: {[key: string]: string} = {};
    attributes?: {[key: string]: string} = {};

    /**
     * Item lists
     */
    classes?: string[] = [];
    buttons?: mintItem[] = [];
    images?: mintItem[] = [];
    children?: mintItem[] = [];
};
export default mintItem;
