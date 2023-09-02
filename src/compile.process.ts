import { InvalidArgumentError, Yaml } from 'js-common';
import { readFile, writeFile } from 'fs/promises';
import { basename, dirname, join, relative, resolve } from 'path';

import { hideBin } from 'yargs/helpers';
import yargs from 'yargs';

let args = yargs(hideBin(process.argv)).parseSync();
let [input, output] = args._ as string[];

if(!input)
	throw new InvalidArgumentError('Specify an input');
if(!output)
	throw new InvalidArgumentError('Specify an output directory');
let importMap = new Map<string, string[][]>();
let base = (args.base ?? process.cwd()) as string;

output = relative(base, resolve(base, output));
input = relative(base, resolve(base, input));
output = join(output, dirname(input), `${basename(input, 'yaml')}ts`);
output = resolve(base, output);
input = resolve(base, input);

function resolveImport(imp: string){
	let path = imp.split('/') as string[];

	if(path[0] == '.')
		path[0] = `${relative(dirname(output), dirname(input))}`;
	let type = path.pop()!.split('.');

	path.push(type.shift()!);

	let file = path.join('/');

	if(!importMap.has(file))
		importMap.set(file, []);
	importMap.get(file)!.push(type);

	return `!impl:${type[type.length - 1]}`;
}

(async function(){
	let config = await Yaml.decode(await readFile(input, 'utf8'));

	let data = JSON.stringify(config, (key, value) => {
		if(key != 'implementation')
			return value;
		return resolveImport(value);
	}, '\t');

	data = data.replaceAll(/"\!impl:([^"]+)"/g, (arg0, arg1) => {
		return arg1;
	});

	let imports = [];
	let types = [];

	for(let [key, paths] of importMap){
		let fileName = basename(key);

		for(let type of paths)
			types.push(`import ${type[type.length - 1]} = ${[fileName, ...type].join('.')};`);
		imports.push(`import * as ${fileName} from '${key}';`);
	}

	let out = [];

	out.push(...imports);

	if(imports.length)
		out.push('');
	out.push(...types);

	if(types.length)
		out.push('');
	out.push(`export default ${data};`)

	await writeFile(output, out.join('\n'), 'utf8');
})();