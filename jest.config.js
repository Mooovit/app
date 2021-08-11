module.exports = {
	setupFilesAfterEnv: ["<rootDir>src/setupTests.js"],
	testMatch: [
		"**/__tests__/**/*.js?(x)",
		"**/?(*.)(test).js?(x)"
	],
  preset: "jest-expo"
};
