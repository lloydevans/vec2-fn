import { expectType } from "ts-expect";
import { abs } from "../fn/abs";
import { add } from "../fn/add";
import { clamp } from "../fn/clamp";
import { mod } from "../fn/mod";
import { modo } from "../fn/modo";
import { multiply } from "../fn/multiply";
import { negate } from "../fn/negate";
import { normalize } from "../fn/normalize";
import { subtract } from "../fn/subtract";
import { Vec2 } from "../types/vec2";

type CustomVec2Array = [number, number];
type CustomVec2Object = { x: number; y: number; getNew: () => CustomVec2Object };

export function testTripleVecSig(
	fn: typeof clamp //
): void {
	const getNew = (): CustomVec2Object => ({ x: 0, y: 0, getNew });
	const vec1O1: { x: number; y: number } = { x: -1, y: -1 };
	const vec1O2: CustomVec2Object = getNew();
	const vec1O3: Vec2 = { x: 0, y: 0 };
	const vec1A1: [number, number] = [-1, -1];
	const destO1 = { x: 0, y: 0 };
	const destO2: Vec2 = { x: 0, y: 0 };
	const destO3: CustomVec2Object = getNew();
	const destA1: [number, number] = [0, 0];
	const destA2: CustomVec2Array = [0, 0];

	expectType<number[]>(fn(vec1A1, vec1O2, destA1));
	expectType<{ x: number; y: number }>(fn(vec1O1, vec1A1, destO1));
	expectType<CustomVec2Object>(fn(vec1O2, vec1A1, destO3));
	expectType<Vec2>(fn(vec1O3, vec1O2, destO2));
	expectType<number[]>(fn(vec1A1, destA1, destA1));
	expectType<CustomVec2Array>(fn(destA2, vec1A1, vec1A1));
	expectType<{ x: number; y: number }>(fn(destO1, vec1A1, destO1));
}

export function testDoubleVecSig(
	fn:
		| typeof add //
		| typeof mod
		| typeof modo
		| typeof multiply
		| typeof subtract
): void {
	const getNew = (): CustomVec2Object => ({ x: 0, y: 0, getNew });
	const vec1O1: { x: number; y: number } = { x: -1, y: -1 };
	const vec1O2: CustomVec2Object = getNew();
	const vec1O3: Vec2 = { x: 0, y: 0 };
	const vec1A1: [number, number] = [-1, -1];
	const destO1 = { x: 0, y: 0 };
	const destO2: Vec2 = { x: 0, y: 0 };
	const destA1: [number, number] = [0, 0];
	const destA2: CustomVec2Array = [0, 0];

	fn(vec1O1, 1, undefined);
	expectType<number[]>(fn(vec1A1, 1));
	expectType<{ x: number; y: number }>(fn(vec1O1, 1));
	expectType<CustomVec2Object>(fn(vec1O2, 1));
	expectType<Vec2>(fn(vec1O3, 1));
	expectType<number[]>(fn(vec1A1, 1, destA1));
	expectType<CustomVec2Array>(fn(vec1A1, [1, 1], destA2));
	expectType<{ x: number; y: number }>(fn(vec1A1, [1, 1], destO1));
	expectType<Vec2>(fn(vec1A1, { x: 1, y: 1 }, destO2));
}

export function testSingleVecSig(
	fn:
		| typeof abs //
		| typeof negate
		| typeof normalize
): void {
	const getNew = (): CustomVec2Object => ({ x: 0, y: 0, getNew });
	const vec1O1: { x: number; y: number } = { x: -1, y: -1 };
	const vec1O2: CustomVec2Object = getNew();
	const vec1O3: Vec2 = { x: 0, y: 0 };
	const vec1A1: [number, number] = [-1, -1];
	const destO1 = { x: 0, y: 0 };
	const destO2: Vec2 = { x: 0, y: 0 };
	const destA1: [number, number] = [0, 0];
	const destA2: CustomVec2Array = [0, 0];

	fn(vec1O1, undefined);
	expectType<number[]>(fn(vec1A1));
	expectType<{ x: number; y: number }>(fn(vec1O1));
	expectType<CustomVec2Object>(fn(vec1O2));
	expectType<Vec2>(fn(vec1O3));
	expectType<number[]>(fn(vec1A1, destA1));
	expectType<CustomVec2Array>(fn(vec1A1, destA2));
	expectType<{ x: number; y: number }>(fn(vec1A1, destO1));
	expectType<Vec2>(fn(vec1A1, destO2));
}
