'use strict';

var jsCommon = require('js-common');
var promises = require('fs/promises');
var fs = require('fs');
var path = require('path');
var helpers = require('yargs/helpers');
var I = require('yargs');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var I__default = /*#__PURE__*/_interopDefault(I);

var N=Object.defineProperty;var p=(o,t)=>N(o,"name",{value:t,configurable:!0});var c=class o{static{p(this,"Config");}static config;path;data;constructor(t,e){this.path=t,this.data=e;}static async read(t){let e;try{e=await promises.readFile(t,"utf8");}catch(i){throw i.code=="ENOENT"?new jsCommon.NotFoundError(`File not found: ${t}`):i}return jsCommon.Yaml.decode(e)}static readSync(t){let e;try{e=fs.readFileSync(t,"utf8");}catch(i){throw i.code=="ENOENT"?new jsCommon.NotFoundError(`File not found: ${t}`):i}return jsCommon.Yaml.decode(e)}static async write(t,e){await promises.writeFile(t,e===void 0?"":jsCommon.Yaml.encode(e));}static async loadConfig(t){return new o(t,await this.read(t))}static loadConfigSync(t){return new o(t,this.readSync(t))}static use(t){this.config=this.loadConfigSync(t);}static get(t){return this.config||this.use("config.yaml"),this.config?.get(t)}get(t){let e=this.data,i=t.split("/");for(;i.length;){if(e===void 0)return;if(typeof e!="object"||e===null)throw new jsCommon.ParseError(`Could not read config '${t}'`);e=e[i.shift()];}return e}set(t,e){let i=this.data,n=t.split("/");for(i==null&&(this.data=i={});n.length>1;){let r=n.shift();if(i[r]===void 0||i[r]===null){i=i[r]={};continue}if(typeof i[r]!="object")throw new jsCommon.ParseError(`Could not set config '${t}'`);i=i[r];}i[n.shift()]=e;}save(){return o.write(this.path,this.data)}};var F=I__default.default(helpers.hideBin(process.argv)).parseSync(),[s,a]=F._;if(!s)throw new jsCommon.InvalidArgumentError("Specify an input");if(!a)throw new jsCommon.InvalidArgumentError("Specify an output directory");var u=new Map,f=F.base??process.cwd();a=path.relative(f,path.resolve(f,a));s=path.relative(f,path.resolve(f,s));a=path.join(a,path.dirname(s),`${path.basename(s,"yaml")}ts`);a=path.resolve(f,a);s=path.resolve(f,s);function M(o){let t=o.split("/");t[0]=="."&&(t[0]=`${path.relative(path.dirname(a),path.dirname(s))}`);let e=t.pop().split(".");t.push(e.shift());let i=t.join("/");return u.has(i)||u.set(i,[]),u.get(i).push(e),`!impl:${e[e.length-1]}`}p(M,"resolveImport");(async function(){let o=await c.read(s),t=JSON.stringify(o,(r,l)=>r!="implementation"?l:M(l),"	");t=t.replaceAll(/"\!impl:([^"]+)"/g,(r,l)=>l);let e=[],i=[];for(let[r,l]of u){let w=path.basename(r);for(let d of l)i.push(`import ${d[d.length-1]} = ${[w,...d].join(".")};`);e.push(`import * as ${w} from '${r}';`);}let n=[];n.push(...e),e.length&&n.push(""),n.push(...i),i.length&&n.push(""),n.push(`export default ${t};`),await promises.writeFile(a,n.join(`
`),"utf8");})();
