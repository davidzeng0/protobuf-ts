'use strict';

var path = require('path');
var jsCommon = require('js-common');
var promises = require('fs/promises');
var fs = require('fs');

var d=Object.defineProperty;var g=(n,t,e)=>t in n?d(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var f=(n,t)=>d(n,"name",{value:t,configurable:!0});var l=(n,t,e)=>(g(n,typeof t!="symbol"?t+"":t,e),e);var o=class{path;data;constructor(t,e){this.path=t,this.data=e;}static async read(t){let e;try{e=await promises.readFile(t,"utf8");}catch(i){throw i.code=="ENOENT"?new jsCommon.NotFoundError(`File not found: ${t}`):i}return jsCommon.Yaml.decode(e)}static readSync(t){let e;try{e=fs.readFileSync(t,"utf8");}catch(i){throw i.code=="ENOENT"?new jsCommon.NotFoundError(`File not found: ${t}`):i}return jsCommon.Yaml.decode(e)}static async write(t,e){await promises.writeFile(t,e===void 0?"":jsCommon.Yaml.encode(e));}static async loadConfig(t){return new o(t,await this.read(t))}static loadConfigSync(t){return new o(t,this.readSync(t))}static use(t){this.config=this.loadConfigSync(t);}static get(t){return this.config||this.use("config.yaml"),this.config?.get(t)}get(t){let e=this.data,i=t.split("/");for(;i.length;){if(e===void 0)return;if(typeof e!="object"||e===null)throw new jsCommon.ParseError(`Could not read config '${t}'`);e=e[i.shift()];}return e}set(t,e){let i=this.data,a=t.split("/");for(i==null&&(this.data=i={});a.length>1;){let r=a.shift();if(i[r]===void 0||i[r]===null){i=i[r]={};continue}if(typeof i[r]!="object")throw new jsCommon.ParseError(`Could not set config '${t}'`);i=i[r];}i[a.shift()]=e;}save(){return o.write(this.path,this.data)}},s=o;f(s,"Config"),l(s,"config");var $=path.resolve(`${__dirname}/..`);

exports.Config = s;
exports.PROTOBUF_TS_ROOT = $;
