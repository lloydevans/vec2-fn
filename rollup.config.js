import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

export default {
	input: "src/index.ts",

	external: [],

	plugins: [
		typescript({
			declarationDir: undefined,
			outDir: undefined,
			declaration: false,
			module: "ES2020",
			target: "ES5",
		}),
		terser(),
	],

	output: {
		sourcemap: true,
		file: "bin/vec2.js",
		format: "iife",
		name: "vec2",
		extend: false,
		globals: {},
	},
};
