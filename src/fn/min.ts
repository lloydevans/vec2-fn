import { ERROR_MESSAGES } from "../constants/error-messages";
import { Vec2Param } from "../types/vec2-param";
import { isVec2LikeArray } from "./is-vec2-like-array";
import { isVec2LikeObject } from "./is-vec2-like-object";

/**
 * Returns the min x and y of a set of vectors.
 *
 * @param target -
 * @param values -
 * @returns -
 */
export function min<D extends Vec2Param>(dest: D, ...values: (Vec2Param | number)[]): D {
	let x: number = Number.MAX_VALUE;
	let y: number = Number.MAX_VALUE;

	for (let i = 0; i < values.length; i++) {
		const el = values[i];

		if (typeof el === "number") {
			x = x > el ? el : x;
			y = y > el ? el : y;
		} else if (isVec2LikeObject(el)) {
			x = x > el.x ? el.x : x;
			y = y > el.y ? el.y : y;
		} else if (isVec2LikeArray(el)) {
			x = x > el[0] ? el[0] : x;
			y = y > el[1] ? el[1] : y;
		} else {
			throw new TypeError(ERROR_MESSAGES.INV_V2_VAL);
		}
	}

	if (isVec2LikeObject(dest)) {
		dest.x = x;
		dest.y = y;
	} else if (isVec2LikeArray(dest)) {
		dest[0] = x;
		dest[1] = y;
	} else {
		throw new TypeError(ERROR_MESSAGES.INV_V2_DEST);
	}

	return dest;
}
