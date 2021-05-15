import { Vec2Param } from "../types/vec2-param";
import { _performOperand } from "./_perform-operand";

/**
 * Add vectors together.
 *
 * @param target - Target vector.
 * @param value - The vector to add.
 * @returns - A reference to the modified target object.
 *
 * @example
 *
 * ```ts
 * add({ x: -1, y: -1 }, { x: 1, y: 1 }); // -> { x: 0, y: 0 }
 * ```
 */
export function add<T extends Vec2Param>(target: T, value: Vec2Param | number): T;
/**
 * Add vectors together.
 *
 * @param target - Target vector.
 * @param value - The vector to add.
 * @param dest - Destination object to store the result.
 * @returns - A reference to the modified destination object.
 *
 * @example
 *
 * ```ts
 * let result = { x: 0, y: 0 };
 *
 * add({ x: -1, y: -1 }, { x: 1, y: 1 }, result); // -> { x: 0, y: 0 }
 * ```
 */
export function add<T extends Vec2Param, V extends Vec2Param, D extends Vec2Param>(target: T, value: V | number, dest?: D): D;
export function add<T extends Vec2Param, V extends Vec2Param, D extends Vec2Param>(target: T, value: V | number, dest?: D): unknown {
	return _performOperand("+", target, value, dest);
}
