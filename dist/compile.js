'use strict';

var jsCommon = require('js-common');
var promises = require('fs/promises');
var path = require('path');
var helpers = require('yargs/helpers');
var yargs = require('yargs');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var yargs__default = /*#__PURE__*/_interopDefault(yargs);

var args=yargs__default.default(helpers.hideBin(process.argv)).parseSync(),[input,output]=args._;if(!input)throw new jsCommon.InvalidArgumentError("Specify an input");if(!output)throw new jsCommon.InvalidArgumentError("Specify an output directory");var importMap=new Map,base=args.base??process.cwd();output=path.relative(base,path.resolve(base,output));input=path.relative(base,path.resolve(base,input));output=path.join(output,path.dirname(input),`${path.basename(input,"yaml")}ts`);output=path.resolve(base,output);input=path.resolve(base,input);function resolveImport(imp){let path$1=imp.split("/");path$1[0]=="."&&(path$1[0]=`${path.relative(path.dirname(output),path.dirname(input))}`);let type=path$1.pop().split(".");path$1.push(type.shift());let file=path$1.join("/");return importMap.has(file)||importMap.set(file,[]),importMap.get(file).push(type),`!impl:${type[type.length-1]}`}(async function(){let config=await jsCommon.Yaml.decode(await promises.readFile(input,"utf8")),data=JSON.stringify(config,(key,value)=>{if(key!="implementation")return value;if(typeof value=="string")return resolveImport(value);for(let[key2,val]of jsCommon.KV.entries(value))value[key2]=resolveImport(val);return value},"	");data=data.replaceAll(/"\!impl:([^"]+)"/g,(arg0,arg1)=>arg1);let imports=[],types=[];for(let[key,paths]of importMap){let fileName=path.basename(key);for(let type of paths)types.push(`import ${type[type.length-1]} = ${[fileName,...type].join(".")};`);imports.push(`import * as ${fileName} from '${key}';`);}let out=[];out.push(...imports),imports.length&&out.push(""),out.push(...types),types.length&&out.push(""),out.push(`export default ${data};`),await promises.writeFile(output,out.join(`
`),"utf8");})();
//# sourceMappingURL=out.js.map
//# sourceMappingURL=compile.js.map