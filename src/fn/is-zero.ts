import { ZERO } from "../constants/zero";
import { Vec2Param } from "../types/vec2-param";
import { equal } from "./equal";

/**
 * Check whether a vector is exactly equal to zero (0,0).
 *
 * @param target - Target vector.
 * @returns - Boolean result of whether the vector is equal to zero.
 */
export function isZero(vec1: Vec2Param): boolean {
	return equal(vec1, ZERO);
}
