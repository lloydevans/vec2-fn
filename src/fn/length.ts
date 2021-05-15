import { Vec2Param } from "../types/vec2-param";
import { lengthSq } from "./length-sq";

/**
 * Get the length of a vector.
 *
 * @param vec - The input vector.
 * @returns - The number result of the vector length.
 */
export function length<T extends Vec2Param>(vec: T): number {
	return Math.sqrt(lengthSq(vec));
}
