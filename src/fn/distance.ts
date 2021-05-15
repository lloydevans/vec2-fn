import { Vec2Param } from "../types/vec2-param";
import { distanceSq } from "./distance-sq";

/**
 * Get the distance between two vectors.
 *
 * @param from - From vector.
 * @param to - To vector.
 * @returns - Number distance result.
 */
export function distance<F extends Vec2Param, T extends Vec2Param>(from: F, to: T): number {
	return Math.sqrt(distanceSq(from, to));
}
