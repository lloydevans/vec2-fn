import { ERROR_MESSAGES } from "../constants/error-messages";
import { toArray } from "./to-array";

describe(toArray.name, () => {
	it("should convert vec2 like object to array", () => {
		const result = toArray({ x: 0, y: 0 });
		expect(result).toEqual([0, 0]);
	});

	it("should throw non-object type error", () => {
		expect(() => toArray(0 as any)).toThrowError(ERROR_MESSAGES.INV_V2);
		expect(() => toArray("" as any)).toThrowError(ERROR_MESSAGES.INV_V2);
		expect(() => toArray({} as any)).toThrowError(ERROR_MESSAGES.INV_V2);
		expect(() => toArray({ z: 0 } as any)).toThrowError(ERROR_MESSAGES.INV_V2);
	});
});
