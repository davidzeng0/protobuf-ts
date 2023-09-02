"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const js_common_1 = require("js-common");
const promises_1 = require("fs/promises");
const path_1 = require("path");
const helpers_1 = require("yargs/helpers");
const yargs_1 = __importDefault(require("yargs"));
let args = (0, yargs_1.default)((0, helpers_1.hideBin)(process.argv)).parseSync();
let [input, output] = args._;
if (!input)
    throw new js_common_1.InvalidArgumentError('Specify an input');
if (!output)
    throw new js_common_1.InvalidArgumentError('Specify an output directory');
let importMap = new Map();
let base = (args.base ?? process.cwd());
output = (0, path_1.relative)(base, (0, path_1.resolve)(base, output));
input = (0, path_1.relative)(base, (0, path_1.resolve)(base, input));
output = (0, path_1.join)(output, (0, path_1.dirname)(input), `${(0, path_1.basename)(input, 'yaml')}ts`);
output = (0, path_1.resolve)(base, output);
input = (0, path_1.resolve)(base, input);
function resolveImport(imp) {
    let path = imp.split('/');
    if (path[0] == '.')
        path[0] = `${(0, path_1.relative)((0, path_1.dirname)(output), (0, path_1.dirname)(input))}`;
    let type = path.pop().split('.');
    path.push(type.shift());
    let file = path.join('/');
    if (!importMap.has(file))
        importMap.set(file, []);
    importMap.get(file).push(type);
    return `!impl:${type[type.length - 1]}`;
}
(async function () {
    let config = await js_common_1.Yaml.decode(await (0, promises_1.readFile)(input, 'utf8'));
    let data = JSON.stringify(config, (key, value) => {
        if (key != 'implementation')
            return value;
        if (typeof value == 'string')
            return resolveImport(value);
        for (let [key, val] of js_common_1.KV.entries(value))
            value[key] = resolveImport(val);
        return value;
    }, '\t');
    data = data.replaceAll(/"\!impl:([^"]+)"/g, (arg0, arg1) => {
        return arg1;
    });
    let imports = [];
    let types = [];
    for (let [key, paths] of importMap) {
        let fileName = (0, path_1.basename)(key);
        for (let type of paths)
            types.push(`import ${type[type.length - 1]} = ${[fileName, ...type].join('.')};`);
        imports.push(`import * as ${fileName} from '${key}';`);
    }
    let out = [];
    out.push(...imports);
    if (imports.length)
        out.push('');
    out.push(...types);
    if (types.length)
        out.push('');
    out.push(`export default ${data};`);
    await (0, promises_1.writeFile)(output, out.join('\n'), 'utf8');
})();
