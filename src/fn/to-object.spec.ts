import { ERROR_MESSAGES } from "../constants/error-messages";
import { toObject } from "./to-object";

describe(toObject.name, () => {
	it("should convert vec2 like array to object", () => {
		const result = toObject([0, 0]);
		expect(result).toEqual({ x: 0, y: 0 });
	});

	it("should throw non-object type error", () => {
		expect(() => toObject(0 as any)).toThrowError(ERROR_MESSAGES.INV_V2_ARR);
		expect(() => toObject("" as any)).toThrowError(ERROR_MESSAGES.INV_V2_ARR);
		expect(() => toObject({} as any)).toThrowError(ERROR_MESSAGES.INV_V2_ARR);
		expect(() => toObject({ z: 0 } as any)).toThrowError(ERROR_MESSAGES.INV_V2_ARR);
	});
});
