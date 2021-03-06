const { readFile, writeFile } = require("fs").promises;

(async function () {
	let docs, intro;

	try {
		docs = (await readFile("docs/md/README.md")).toString();
		intro = (await readFile("build-scripts/HEADER.md")).toString();

		let insertIdx = docs.indexOf("## Table of contents");
		let head = docs.slice(0, insertIdx);
		let page = docs.slice(insertIdx);
		let split = head.split(/\r?\n/);
		split.shift(), split.shift();
		head = split.join("");
		head += "\n";
		head += intro;
		head += "\n";

		// Fudge links to HTML docs into the markdown
		head += page //
			.split("(https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md")
			.join("(https://lloydevans.github.io/vec2-fn/modules.html");

		await writeFile("README.md", head);
	} catch (error) {
		console.log(error);
	}
})();
