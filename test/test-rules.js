const fs = require("fs");
const { expect } = require("chai");
const { CLIEngine } = require("eslint");

describe("Rules", () => {

	const runOnDir = (dir) => {
		describe(dir, () => {

			const files = fs.readdirSync(`${__dirname}/examples/${dir}`);

			files.forEach(fileName => {

				it(fileName, (done) => {
					const testFile = fs.readFileSync(`${__dirname}/examples/${dir}/${fileName}`, "utf8");
					const testInfo = require(`${__dirname}/examples/${dir}/${fileName}`);

					const cli = new CLIEngine({
						useEslintrc: false,
						configFile: ".eslintrc.json"
					});

					expect(cli.executeOnText(testFile).errorCount).to.equal(testInfo.errorCount);

					done();
				});

			});


		});
	};

	runOnDir("valid");
	runOnDir("invalid");

});