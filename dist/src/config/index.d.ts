export declare class Config {
    private static config;
    private path;
    private data;
    constructor(path: string, data: any);
    static read(path: string): Promise<any>;
    static readSync(path: string): any;
    static write(path: string, data: any): Promise<void>;
    static loadConfig(path: string): Promise<Config>;
    static loadConfigSync(path: string): Config;
    static use(path: string): void;
    static get(path: string): any;
    get(path: string): any;
    set(path: string, value: any): void;
    save(): Promise<void>;
}
