/* CLI a11y */
const chalk = require('chalk');
const dim = chalk.dim;

module.exports = options => {
	const opts = {
		toggle: false,
		...options
	};

	if (opts.toggle) {
		console.log(`${dim(`❯ Select with arrow-keys ← → and then press ⏎ [enter/return] to submit.`)}`);
	}
};
