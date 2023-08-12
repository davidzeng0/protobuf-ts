"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const js_common_1 = require("js-common");
const promises_1 = require("fs/promises");
const fs_1 = require("fs");
class Config {
    static config;
    path;
    data;
    constructor(path, data) {
        this.path = path;
        this.data = data;
    }
    static async read(path) {
        let contents;
        try {
            contents = await (0, promises_1.readFile)(path, 'utf8');
        }
        catch (error) {
            if (error.code == 'ENOENT')
                throw new js_common_1.NotFoundError(`File not found: ${path}`);
            throw error;
        }
        return js_common_1.Yaml.decode(contents);
    }
    static readSync(path) {
        let contents;
        try {
            contents = (0, fs_1.readFileSync)(path, 'utf8');
        }
        catch (error) {
            if (error.code == 'ENOENT')
                throw new js_common_1.NotFoundError(`File not found: ${path}`);
            throw error;
        }
        return js_common_1.Yaml.decode(contents);
    }
    static async write(path, data) {
        await (0, promises_1.writeFile)(path, data === undefined ? '' : js_common_1.Yaml.encode(data));
    }
    static async loadConfig(path) {
        return new Config(path, await this.read(path));
    }
    static loadConfigSync(path) {
        return new Config(path, this.readSync(path));
    }
    static use(path) {
        this.config = this.loadConfigSync(path);
    }
    static get(path) {
        if (!this.config)
            this.use('config.yaml');
        return this.config?.get(path);
    }
    get(path) {
        let root = this.data;
        let split = path.split('/');
        while (split.length) {
            if (root === undefined)
                return undefined;
            if (typeof root != 'object' || root === null)
                throw new js_common_1.ParseError(`Could not read config '${path}'`);
            root = root[split.shift()];
        }
        return root;
    }
    set(path, value) {
        let root = this.data;
        let split = path.split('/');
        if (root === undefined || root === null)
            this.data = root = {};
        while (split.length > 1) {
            let name = split.shift();
            if (root[name] === undefined || root[name] === null) {
                root = root[name] = {};
                continue;
            }
            if (typeof root[name] != 'object')
                throw new js_common_1.ParseError(`Could not set config '${path}'`);
            root = root[name];
        }
        root[split.shift()] = value;
    }
    save() {
        return Config.write(this.path, this.data);
    }
}
exports.Config = Config;
