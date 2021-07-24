import { Vec2Param } from "../types/vec2-param";
import { _performOperand } from "./_perform-operand";

/**
 * Subtract one vector from another.
 *
 * @param target - The target vector.
 * @param value - The vector to subtract.
 * @returns - A reference to the modified target vector.
 *
 * @example
 *
 * ```ts
 * subtract({ x: 1, y: 1 }, { x: 1, y: 1 }); // -> { x: 0, y: 0 }
 * ```
 */
export function subtract<T extends Vec2Param>(target: T, value: Vec2Param | number): T;
/**
 * Subtract one vector from another.
 *
 * @param target - The target vector.
 * @param value - The vector to subtract.
 * @param dest - Destination object to store the result.
 * @returns - A reference to the modified destination vector.
 *
 * @example
 *
 * ```ts
 * let result = { x: 0, y: 0 };
 * subtract({ x: 1, y: 1 }, { x: 1, y: 1 }, result); // -> { x: 0, y: 0 }
 * ```
 */
export function subtract<D extends Vec2Param>(target: Vec2Param, value: Vec2Param | number, dest?: D): D;
export function subtract<D extends Vec2Param>(target: Vec2Param, value: Vec2Param | number, dest?: D): unknown {
	return _performOperand("-", target, value, dest);
}
