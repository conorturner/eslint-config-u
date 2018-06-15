const a = 1, b = 2;

const func = () => {
	if (a === b) return 1;
	else if (a === b) return 2;
	else return 3;
};

func();

module.exports = { errorCount: 0 };
