import { ONE } from "../constants/one";
import { Vec2Param } from "../types/vec2-param";
import { equal } from "./equal";

/**
 * Check whether a vector is exactly equal to one (1,1).
 *
 * @param target - Target vector.
 * @returns - Boolean result of whether the vector is equal to one.
 */
export function isOne(target: Vec2Param): boolean {
	return equal(target, ONE);
}
