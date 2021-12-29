#!/usr/bin/env node

/**
 * mycli
 * my hello
 *
 * @author Dhany Nurdiansyah <github.com/dhanyn10>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const fs = require('fs')
const moment = require('moment')

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	const d = moment().format('yyyy-mm-dd:hh:mm:ss')
	if(flags.type == "json") {
		const dir = fs.readFileSync(input[0])
		const jsondata = JSON.parse(dir)
		fs.writeFileSync(`./test/json/${d}.json`, JSON.stringify(jsondata))
		console.log(`your file saved to ./test/json/${d}.json`)
	}
	else
	{
		const dir = fs.readFileSync(input[0], 'utf-8')
		fs.writeFileSync(`./test/txt/${d}.txt`, dir)
		console.log(`your file saved to ./test/txt/${d}.txt`)
	}

	debug && log(flags);
})();
