import { normalize } from "../fn/normalize";
import { Vec2Readonly } from "../types/vec2-readonly";

/** Normalized Vec2 pointing down-left */
export const VEC2_DOWN_LEFT: Vec2Readonly = Object.freeze(normalize({ x: -1, y: -1 }));
