'use strict';

var jsCommon = require('js-common');
var promises = require('fs/promises');
var path = require('path');
var helpers = require('yargs/helpers');
var A = require('yargs');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var A__default = /*#__PURE__*/_interopDefault(A);

var w=A__default.default(helpers.hideBin(process.argv)).parseSync();var[e,i]=w._;if(!e)throw new jsCommon.InvalidArgumentError("Specify an input");if(!i)throw new jsCommon.InvalidArgumentError("Specify an output directory");var l=new Map;var n=w.base??process.cwd();i=path.relative(n,path.resolve(n,i));e=path.relative(n,path.resolve(n,e));i=path.join(i,path.dirname(e),`${path.basename(e,"yaml")}ts`);i=path.resolve(n,i);e=path.resolve(n,e);function F(m){let t=m.split("/");if(t[0]==".")t[0]=`${path.relative(path.dirname(i),path.dirname(e))}`;let r=t.pop().split(".");t.push(r.shift());let p=t.join("/");if(!l.has(p))l.set(p,[]);l.get(p).push(r);return `!impl:${r[r.length-1]}`}(async function(){let m=await jsCommon.Yaml.decode(await promises.readFile(e,"utf8"));let t=JSON.stringify(m,(a,s)=>{if(a!="implementation")return s;return F(s)},"	");t=t.replaceAll(/"\!impl:([^"]+)"/g,(a,s)=>{return s});let r=[];let p=[];for(let[a,s]of l){let c=path.basename(a);for(let u of s)p.push(`import ${u[u.length-1]} = ${[c,...u].join(".")};`);r.push(`import * as ${c} from '${a}';`);}let o=[];o.push(...r);if(r.length)o.push("");o.push(...p);if(p.length)o.push("");o.push(`export default ${t};`);await promises.writeFile(i,o.join("\n"),"utf8");})();
