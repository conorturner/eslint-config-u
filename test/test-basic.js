const { expect } = require("chai");

const config = require("../");

describe("Basic", () => {

	it("Config has basic properties",  (done) => {

		expect(config.extends).to.equal("eslint-config-synacor");
		expect(config.rules).to.be.an("object");

		expect(config).to.deep.equal(require("../.eslintrc"));

		done();
	});

});
