'use strict';

var path = require('path');
var jsCommon = require('js-common');
var promises = require('fs/promises');
var fs = require('fs');

var l=Object.defineProperty;var a=(n,t)=>l(n,"name",{value:t,configurable:!0});var f=class n{static{a(this,"Config");}static config;path;data;constructor(t,i){this.path=t,this.data=i;}static async read(t){let i;try{i=await promises.readFile(t,"utf8");}catch(e){throw e.code=="ENOENT"?new jsCommon.NotFoundError(`File not found: ${t}`):e}return jsCommon.Yaml.decode(i)}static readSync(t){let i;try{i=fs.readFileSync(t,"utf8");}catch(e){throw e.code=="ENOENT"?new jsCommon.NotFoundError(`File not found: ${t}`):e}return jsCommon.Yaml.decode(i)}static async write(t,i){await promises.writeFile(t,i===void 0?"":jsCommon.Yaml.encode(i));}static async loadConfig(t){return new n(t,await this.read(t))}static loadConfigSync(t){return new n(t,this.readSync(t))}static use(t){this.config=this.loadConfigSync(t);}static get(t){return this.config||this.use("config.yaml"),this.config?.get(t)}get(t){let i=this.data,e=t.split("/");for(;e.length;){if(i===void 0)return;if(typeof i!="object"||i===null)throw new jsCommon.ParseError(`Could not read config '${t}'`);i=i[e.shift()];}return i}set(t,i){let e=this.data,o=t.split("/");for(e==null&&(this.data=e={});o.length>1;){let r=o.shift();if(e[r]===void 0||e[r]===null){e=e[r]={};continue}if(typeof e[r]!="object")throw new jsCommon.ParseError(`Could not set config '${t}'`);e=e[r];}e[o.shift()]=i;}save(){return n.write(this.path,this.data)}};var v=path.resolve(`${__dirname}/..`);

exports.Config = f;
exports.PROTOBUF_TS_ROOT = v;
