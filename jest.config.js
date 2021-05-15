/**
 * @type {import("@jest/types").Config.InitialOptions}
 */
const config = {
	verbose: true,

	transform: { "^.+\\.tsx?$": "ts-jest" },

	setupFiles: [],

	testEnvironment: "jsdom",

	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",

	testPathIgnorePatterns: ["/lib/", "/node_modules/"],

	coverageReporters: ["json-summary", "text"],

	moduleFileExtensions: ["ts", "tsx", "js", "json"],

	collectCoverageFrom: ["src/fn/**/*.ts", "!**/node_modules/**"],

	coverageDirectory: "coverage",

	collectCoverage: true,
};

module.exports = config;
