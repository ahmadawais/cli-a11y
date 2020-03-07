/* CLI a11y */
const chalk = require('chalk');
const dim = chalk.dim;

module.exports = options => {
	const opts = {
		toggle: false,
		...options
	};

	if (opts.toggle) {
		console.log(`${dim(`❯ Use arrow-keys. [enter/return] to submit.`)}`);
	}
};
