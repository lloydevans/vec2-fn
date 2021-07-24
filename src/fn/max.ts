import { ERROR_MESSAGES } from "../constants/error-messages";
import { Vec2Param } from "../types/vec2-param";
import { isVec2Array } from "./is-vec2-array";
import { isVec2Object } from "./is-vec2-object";

/**
 * Returns the max x and y of a set of vectors.
 *
 * @param dest -
 * @param values -
 * @returns -
 */
export function max<D extends Vec2Param>(dest: D, ...values: (Vec2Param | number)[]): D {
	let x: number = -Number.MAX_VALUE;
	let y: number = -Number.MAX_VALUE;

	for (let i = 0; i < values.length; i++) {
		const el = values[i];

		if (typeof el === "number") {
			x = x < el ? el : x;
			y = y < el ? el : y;
		} else if (isVec2Object(el)) {
			x = x < el.x ? el.x : x;
			y = y < el.y ? el.y : y;
		} else if (isVec2Array(el)) {
			x = x < el[0] ? el[0] : x;
			y = y < el[1] ? el[1] : y;
		} else {
			throw new TypeError(ERROR_MESSAGES.INV_V2_VAL);
		}
	}

	if (isVec2Object(dest)) {
		dest.x = x;
		dest.y = y;
	} else if (isVec2Array(dest)) {
		dest[0] = x;
		dest[1] = y;
	} else {
		throw new TypeError(ERROR_MESSAGES.INV_V2_DEST);
	}

	return dest;
}
