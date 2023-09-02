'use strict';

var jsCommon = require('js-common');
var promises = require('fs/promises');
var path = require('path');
var helpers = require('yargs/helpers');
var I = require('yargs');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var I__default = /*#__PURE__*/_interopDefault(I);

var $=I__default.default(helpers.hideBin(process.argv)).parseSync();var[r,i]=$._;if(!r)throw new jsCommon.InvalidArgumentError("Specify an input");if(!i)throw new jsCommon.InvalidArgumentError("Specify an output directory");var m=new Map;var p=$.base??process.cwd();i=path.relative(p,path.resolve(p,i));r=path.relative(p,path.resolve(p,r));i=path.join(i,path.dirname(r),`${path.basename(r,"yaml")}ts`);i=path.resolve(p,i);r=path.resolve(p,r);function c(g){let e=g.split("/");if(e[0]==".")e[0]=`${path.relative(path.dirname(i),path.dirname(r))}`;let s=e.pop().split(".");e.push(s.shift());let n=e.join("/");if(!m.has(n))m.set(n,[]);m.get(n).push(s);return `!impl:${s[s.length-1]}`}(async function(){let g=await jsCommon.Yaml.decode(await promises.readFile(r,"utf8"));let e=JSON.stringify(g,(a,t)=>{if(a!="implementation")return t;if(typeof t=="string")return c(t);for(let[f,l]of jsCommon.KV.entries(t))t[f]=c(l);return t},"	");e=e.replaceAll(/"\!impl:([^"]+)"/g,(a,t)=>{return t});let s=[];let n=[];for(let[a,t]of m){let f=path.basename(a);for(let l of t)n.push(`import ${l[l.length-1]} = ${[f,...l].join(".")};`);s.push(`import * as ${f} from '${a}';`);}let o=[];o.push(...s);if(s.length)o.push("");o.push(...n);if(n.length)o.push("");o.push(`export default ${e};`);await promises.writeFile(i,o.join("\n"),"utf8");})();
