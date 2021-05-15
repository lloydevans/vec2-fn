import { ZERO } from "../constants/zero";
import { Vec2Param } from "../types/vec2-param";
import { equal } from "./equal";

/**
 * Check whether a vector is exactly equal to zero (0,0).
 *
 * @param target - Target vector.
 * @returns - Boolean result of whether the vector is equal to zero.
 */
export function isZero<T extends Vec2Param>(vec1: T): boolean {
	return equal(vec1, ZERO);
}
