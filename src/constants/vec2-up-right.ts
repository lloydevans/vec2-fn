import { normalize } from "../fn/normalize";
import { Vec2Readonly } from '../types/vec2-readonly';

/** Normalized Vec2 pointing up-right */
export const VEC2_UP_RIGHT: Vec2Readonly = Object.freeze(normalize({ x: 1, y: 1 }));
