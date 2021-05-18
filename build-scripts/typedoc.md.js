/** @type {import("typedoc").TypeDocOptions} */

const config = {
	entryPoints: ["src/index.ts"],
	excludeExternals: false,
	excludePrivate: true,
	excludeProtected: false,
	hideInPageTOC: false,
	readme: "none",
	name: "",

	out: "docs/md",
	publicPath: "https://github.com/lloydevans/vec2-fn/blob/main/docs/md/",
	theme: "default",
	excludeInternal: true,
	pretty: true,
	includeVersion: false,
	gitRemote: "https://github.com/lloydevans/vec2-fn",
};

module.exports = config;
