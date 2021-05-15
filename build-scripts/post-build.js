let ambientTypes = `interface Window {
	vec2: typeof import("./dts");
}

declare const vec2: typeof import("./dts");
`;

const { writeFile } = require("fs").promises;

(async function () {
	try {
		await writeFile("bin/vec2.d.ts", ambientTypes);
	} catch (error) {
		console.log(error);
	}
})();
