import { ERROR_MESSAGES } from "../constants/error-messages";
import { Vec2Param } from "../types/vec2-param";
import { isVec2LikeArray } from "./is-vec2-like-array";
import { isVec2LikeObject } from "./is-vec2-like-object";

/**
 * Returns the larger of a set of vectors.
 *
 * @param target - Target vector to store the result. The target objects existing values are included.
 * @param values - Vectors to be evaluated.
 * @returns - A reference to the modified target vector.
 */
export function max<T extends Vec2Param>(target: T, ...values: (Vec2Param | number)[]): T {
	let x: number = -Number.MAX_VALUE;
	let y: number = -Number.MAX_VALUE;

	values.push(target);

	for (let i = 0; i < values.length; i++) {
		const el = values[i];

		if (i < values.length - 1) {
			if (typeof el === "number") {
				x = x < el ? el : x;
				y = y < el ? el : y;
			} else if (isVec2LikeArray(el)) {
				x = x < el[0] ? el[0] : x;
				y = y < el[1] ? el[1] : y;
			} else if (isVec2LikeObject(el)) {
				x = x < el.x ? el.x : x;
				y = y < el.y ? el.y : y;
			} else {
				throw new TypeError(ERROR_MESSAGES.INV_V2_VAL);
			}
		} else {
			if (isVec2LikeArray(el)) {
				el[0] = x < el[0] ? el[0] : x;
				el[1] = y < el[1] ? el[1] : y;
			} else if (isVec2LikeObject(el)) {
				el.x = x < el.x ? el.x : x;
				el.y = y < el.y ? el.y : y;
			} else {
				throw new TypeError(ERROR_MESSAGES.INV_V2_DEST);
			}
		}
	}

	return target;
}
