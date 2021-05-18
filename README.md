# vec2-fn
[<img src="https://lloydevans.github.io/vec2-fn/assets/badge-functions.svg">](LINK)
[<img src="https://lloydevans.github.io/vec2-fn/assets/badge-lines.svg">](LINK)

### Install

```bash
npm i -S vec2-fn
```

### API Docs

API docs can be found [here](https://lloydevans.github.io/vec2-fn/)

### ES usage:

```ts
// Import star
import * as vec2 from "vec2-fn";
vec2.equal({ x: 0, y: 0 }, vec2.ZERO);

// Import named
import { equal, ZERO } from "vec2-fn";
equal({ x: 0, y: 0 }, ZERO);
```

### Node usage:

```js
// Import all
const vec2 = require("vec2-fn");
vec2.equal({ x: 0, y: 0 }, vec2.ZERO);

// Import named
const { equal, ZERO } = require("vec2-fn");
equal({ x: 0, y: 0 }, ZERO);
```

### Static usage:

Old school method

```html
<script src="./bin/vec2.js"></script>
<script>
	vec2.equal({ x: 0, y: 0 }, vec2.ZERO);
</script>
```

For static usage, ambient type definitions can optionally be referenced here `node_modules/vec2-fn/bin/vec2.d.ts`.

## Table of contents

### Interfaces

- [Vec2](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/interfaces/vec2.md)

### Type aliases

- [Vec2Array](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2array)
- [Vec2Object](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2object)
- [Vec2Param](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param)
- [Vec2Readonly](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2readonly)

### Variables

- [APPROX\_THRESHOLD](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#approx_threshold)
- [MINUS\_ONE](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#minus_one)
- [ONE](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#one)
- [PRECISION](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#precision)
- [VEC2\_DOWN](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2_down)
- [VEC2\_DOWN\_LEFT](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2_down_left)
- [VEC2\_DOWN\_RIGHT](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2_down_right)
- [VEC2\_LEFT](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2_left)
- [VEC2\_RIGHT](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2_right)
- [VEC2\_UP](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2_up)
- [VEC2\_UP\_LEFT](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2_up_left)
- [VEC2\_UP\_RIGHT](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2_up_right)
- [ZERO](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#zero)

### Functions

- [abs](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#abs)
- [add](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#add)
- [angleTo](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#angleto)
- [approx](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#approx)
- [clamp](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#clamp)
- [copy](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#copy)
- [distance](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#distance)
- [distanceSq](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#distancesq)
- [divide](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#divide)
- [dot](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#dot)
- [dotPerp](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#dotperp)
- [equal](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#equal)
- [isOne](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#isone)
- [isVec2LikeArray](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#isvec2likearray)
- [isVec2LikeObject](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#isvec2likeobject)
- [isZero](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#iszero)
- [length](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#length)
- [lengthSq](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#lengthsq)
- [lerp](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#lerp)
- [max](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#max)
- [min](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#min)
- [multiply](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#multiply)
- [negate](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#negate)
- [normalize](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#normalize)
- [rotate](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#rotate)
- [subtract](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#subtract)
- [toArray](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#toarray)
- [toObject](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#toobject)
- [zero](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#zero)

## Type aliases

### Vec2Array

Ƭ **Vec2Array**<T\>: T

Vec2-like array object.

#### Type parameters

| Name | Type | Default |
| :------ | :------ | :------ |
| `T` | *number*[] | [*number*, *number*] |

Defined in: types/vec2-array.ts:2

___

### Vec2Object

Ƭ **Vec2Object**<T\>: T

Vec2-like object.

#### Type parameters

| Name | Type | Default |
| :------ | :------ | :------ |
| `T` | [*Vec2*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/interfaces/vec2.md) | [*Vec2*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/interfaces/vec2.md) |

Defined in: types/vec2-object.ts:4

___

### Vec2Param

Ƭ **Vec2Param**: [*Vec2*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/interfaces/vec2.md) \| [*Vec2Array*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2array)

A Vec2 array or object.

Defined in: types/vec2-param.ts:5

___

### Vec2Readonly

Ƭ **Vec2Readonly**: *Readonly*<[*Vec2*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/interfaces/vec2.md)\>

Readonly Vec2

Defined in: types/vec2-readonly.ts:4

## Variables

### APPROX\_THRESHOLD

• `Const` **APPROX\_THRESHOLD**: ``1e-8``= 0.00000001

Approximate threshold for approx comparison

Defined in: constants/approx-threshold.ts:2

___

### MINUS\_ONE

• `Const` **MINUS\_ONE**: [*Vec2Readonly*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2readonly)

Constant readonly Vec2 with both values equalling `-1`

Defined in: constants/minus-one.ts:4

___

### ONE

• `Const` **ONE**: [*Vec2Readonly*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2readonly)

Constant readonly Vec2 with both values equalling `1`

Defined in: constants/one.ts:4

___

### PRECISION

• `Const` **PRECISION**: ``11``= 11

The number of decimal places calculations are made to.

Defined in: constants/precision.ts:2

___

### VEC2\_DOWN

• `Const` **VEC2\_DOWN**: [*Vec2Readonly*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2readonly)

Normalized Vec2 pointing down

Defined in: constants/vec2-down.ts:4

___

### VEC2\_DOWN\_LEFT

• `Const` **VEC2\_DOWN\_LEFT**: [*Vec2Readonly*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2readonly)

Normalized Vec2 pointing down-left

Defined in: constants/vec2-down-left.ts:5

___

### VEC2\_DOWN\_RIGHT

• `Const` **VEC2\_DOWN\_RIGHT**: [*Vec2Readonly*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2readonly)

Normalized Vec2 pointing down-right

Defined in: constants/vec2-down-right.ts:5

___

### VEC2\_LEFT

• `Const` **VEC2\_LEFT**: [*Vec2Readonly*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2readonly)

Normalized Vec2 pointing left

Defined in: constants/vec2-left.ts:4

___

### VEC2\_RIGHT

• `Const` **VEC2\_RIGHT**: [*Vec2Readonly*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2readonly)

Normalized Vec2 pointing right

Defined in: constants/vec2-right.ts:4

___

### VEC2\_UP

• `Const` **VEC2\_UP**: [*Vec2Readonly*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2readonly)

Normalized Vec2 pointing up

Defined in: constants/vec2-up.ts:4

___

### VEC2\_UP\_LEFT

• `Const` **VEC2\_UP\_LEFT**: [*Vec2Readonly*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2readonly)

Normalized Vec2 pointing up-left

Defined in: constants/vec2-up-left.ts:5

___

### VEC2\_UP\_RIGHT

• `Const` **VEC2\_UP\_RIGHT**: [*Vec2Readonly*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2readonly)

Normalized Vec2 pointing up-right

Defined in: constants/vec2-up-right.ts:5

___

### ZERO

• `Const` **ZERO**: [*Vec2Readonly*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2readonly)

Constant readonly Vec2 with both values equalling `0`

Defined in: constants/zero.ts:4

## Functions

### abs

▸ **abs**<T\>(`target`: T): T

Calculate vec2 absolute value.

**`example`**

```ts
abs({ x: -1, y: -1 }); // -> { x: 0, y: 0 }
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | T | Target vector. |

**Returns:** T

- A reference to the modified target vector.

Defined in: fn/abs.ts:19

▸ **abs**<T, D\>(`target`: T, `dest?`: D): D

Calculate vec2 absolute value.

**`example`**

```ts
abs({ x: -1, y: -1 }); // -> { x: 0, y: 0 }
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |
| `D` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | T | Target vector. |
| `dest?` | D | Destination object to store the result. |

**Returns:** D

- A reference to the modified destination object.

Defined in: fn/abs.ts:34

___

### add

▸ **add**<T\>(`target`: T, `value`: [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) \| *number*): T

Add vectors together.

**`example`**

```ts
add({ x: -1, y: -1 }, { x: 1, y: 1 }); // -> { x: 0, y: 0 }
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | T | Target vector. |
| `value` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) \| *number* | The vector to add. |

**Returns:** T

- A reference to the modified target object.

Defined in: fn/add.ts:17

▸ **add**<T, V, D\>(`target`: T, `value`: V \| *number*, `dest?`: D): D

Add vectors together.

**`example`**

```ts
let result = { x: 0, y: 0 };

add({ x: -1, y: -1 }, { x: 1, y: 1 }, result); // -> { x: 0, y: 0 }
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |
| `V` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |
| `D` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | T | Target vector. |
| `value` | V \| *number* | The vector to add. |
| `dest?` | D | Destination object to store the result. |

**Returns:** D

- A reference to the modified destination object.

Defined in: fn/add.ts:34

___

### angleTo

▸ **angleTo**(`to`: [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param), `from?`: [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param)): *number*

Calculate angle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `to` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) | Vector to calculate to. |
| `from` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) | Vector to calculate from. Defaults to `ZERO`. |

**Returns:** *number*

- Number angle result.

Defined in: fn/angle-to.ts:14

___

### approx

▸ **approx**(`v1`: [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param), `v2`: [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param), `threshold?`: *number*): *boolean*

Calculate whether two vectors are approximately equal.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v1` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) | First vector for comparison. |
| `v2` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) | Second vector for comparison. |
| `threshold` | *number* | - |

**Returns:** *boolean*

- Whether the vectors are approximately equal or not.

Defined in: fn/approx.ts:15

___

### clamp

▸ **clamp**<T, Min, Max\>(`target`: T, `vecMin`: Min \| *number*, `vecMax`: Max \| *number*): T

Clamp a vector by min and max limits.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |
| `Min` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |
| `Max` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | T | Target object. |
| `vecMin` | Min \| *number* | Minimum vector. |
| `vecMax` | Max \| *number* | Maximum vector. |

**Returns:** T

- A reference to the modified target object.

Defined in: fn/clamp.ts:14

▸ **clamp**<T, Min, Max, D\>(`target`: T, `vecMin`: Min \| *number*, `vecMax`: Max \| *number*, `dest?`: D): D

Clamp a vector by min and max limits.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |
| `Min` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |
| `Max` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |
| `D` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | T | Target object. |
| `vecMin` | Min \| *number* | Minimum vector. |
| `vecMax` | Max \| *number* | Maximum vector. |
| `dest?` | D | Destination object to store the values. |

**Returns:** D

- A reference to the modified destination object.

Defined in: fn/clamp.ts:24

___

### copy

▸ **copy**<T, D\>(`target`: T, `dest`: D): D

Copy one vectors values to another.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |
| `D` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | T | Target to be copied from. |
| `dest` | D | The destination object. |

**Returns:** D

- The destination object reference.

Defined in: fn/copy.ts:13

___

### distance

▸ **distance**<F, T\>(`from`: F, `to`: T): *number*

Get the distance between two vectors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |
| `T` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | F | From vector. |
| `to` | T | To vector. |

**Returns:** *number*

- Number distance result.

Defined in: fn/distance.ts:11

___

### distanceSq

▸ **distanceSq**<F, T\>(`from`: F, `to`: T): *number*

Get the squared distance between two vectors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |
| `T` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | F | From vector. |
| `to` | T | To vector. |

**Returns:** *number*

- Number distance squared result.

Defined in: fn/distance-sq.ts:13

___

### divide

▸ **divide**<T\>(`target`: T, `value`: [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) \| *number*): T

Divide two vectors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | T | Target vector. |
| `value` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) \| *number* | The vector to divide by. |

**Returns:** T

- A reference to the modified target object.

Defined in: fn/divide.ts:11

▸ **divide**<T, V\>(`target`: T, `value`: [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) \| *number*, `dest`: V): V

Divide two vectors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |
| `V` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | T | Target vector. |
| `value` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) \| *number* | The vector to divide by. |
| `dest` | V | Destination object to store the result. |

**Returns:** V

- A reference to the modified destination object.

Defined in: fn/divide.ts:20

___

### dot

▸ **dot**<T, V\>(`v1`: T, `v2`: V): *number*

Calculate the dot product of two vectors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |
| `V` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v1` | T | Vector 1. |
| `v2` | V | = Vector 2. |

**Returns:** *number*

- Number result of the dot product.

Defined in: fn/dot.ts:13

___

### dotPerp

▸ **dotPerp**<T, V\>(`v1`: T, `v2`: V): *number*

Calculate the perpendicular dot product of two vectors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |
| `V` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v1` | T | Vector 1. |
| `v2` | V | = Vector 2. |

**Returns:** *number*

- Number result of the perpendicular dot product.

Defined in: fn/dot-perp.ts:13

___

### equal

▸ **equal**<T, V\>(`target`: T, `value`: V \| *number*): *boolean*

Check whether two vectors are exactly equal to system precision.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |
| `V` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | T | Target vector. |
| `value` | V \| *number* | Value vector. |

**Returns:** *boolean*

- Boolean result of whether the vectors are equal.

Defined in: fn/equal.ts:13

___

### isOne

▸ **isOne**<T\>(`target`: T): *boolean*

Check whether a vector is exactly equal to one (1,1).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | T | Target vector. |

**Returns:** *boolean*

- Boolean result of whether the vector is equal to one.

Defined in: fn/is-one.ts:11

___

### isVec2LikeArray

▸ **isVec2LikeArray**<T\>(`value`: T): value is T extends [number, number] ? T : never

Check whether a value is a vec2-like array.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | *unknown* |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | T | Input value to check. |

**Returns:** value is T extends [number, number] ? T : never

- Boolean result of whether the input is a vec2-like array.

Defined in: fn/is-vec2-like-array.ts:9

___

### isVec2LikeObject

▸ **isVec2LikeObject**<T\>(`value`: T): value is T extends Vec2 ? T : never

Check whether a value is a vec2-like object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | *unknown* |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | T | Input value to check. |

**Returns:** value is T extends Vec2 ? T : never

- Boolean result of whether the input is a vec2-like object.

Defined in: fn/is-vec2-like-object.ts:11

___

### isZero

▸ **isZero**<T\>(`vec1`: T): *boolean*

Check whether a vector is exactly equal to zero (0,0).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec1` | T |

**Returns:** *boolean*

- Boolean result of whether the vector is equal to zero.

Defined in: fn/is-zero.ts:11

___

### length

▸ **length**<T\>(`vec`: T): *number*

Get the length of a vector.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vec` | T | The input vector. |

**Returns:** *number*

- The number result of the vector length.

Defined in: fn/length.ts:10

___

### lengthSq

▸ **lengthSq**<T\>(`vec`: T): *number*

Get the squared length of a vector.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vec` | T | The input vector. |

**Returns:** *number*

- The number result of the squared vector length.

Defined in: fn/length-sq.ts:12

___

### lerp

▸ **lerp**<T, V\>(`target`: T, `value`: V, `k`: *number*): T

Linear interpolate two vectors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |
| `V` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | T | Vector A. |
| `value` | V | Vector B. |
| `k` | *number* | The amount to interpolate by. |

**Returns:** T

- A reference to the modified target object.

Defined in: fn/lerp.ts:15

▸ **lerp**<T, V, D\>(`target`: T, `value`: V, `k`: *number*, `dest`: D): D

Linear interpolate two vectors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |
| `V` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |
| `D` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | T | Vector A. |
| `value` | V | Vector B. |
| `k` | *number* | The amount to interpolate by. |
| `dest` | D | Destination object to store the result. |

**Returns:** D

- A reference to the modified destination object.

Defined in: fn/lerp.ts:25

___

### max

▸ **max**<T\>(`target`: T, ...`values`: ([*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) \| *number*)[]): T

Returns the larger of a set of vectors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | T | Target vector to store the result. The target objects existing values are included. |
| `...values` | ([*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) \| *number*)[] | Vectors to be evaluated. |

**Returns:** T

- A reference to the modified target vector.

Defined in: fn/max.ts:13

___

### min

▸ **min**<T\>(`dest`: T, ...`values`: ([*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) \| *number*)[]): T

Returns the larger of a set of vectors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest` | T | - |
| `...values` | ([*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) \| *number*)[] | Vectors to be evaluated. |

**Returns:** T

- A reference to the modified target vector.

Defined in: fn/min.ts:13

___

### multiply

▸ **multiply**<T\>(`target`: T, `value`: [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) \| *number*): T

Multiply two vectors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | T | The target vector. |
| `value` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) \| *number* | The vector to multiply by. |

**Returns:** T

- A reference to the modified target object.

Defined in: fn/multiply.ts:11

▸ **multiply**<T, V, D\>(`target`: T, `value`: V \| *number*, `dest?`: D): D

Multiply two vectors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |
| `V` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |
| `D` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | T | The target vector. |
| `value` | V \| *number* | The vector to multiply by. |
| `dest?` | D | Destination object to store the result. |

**Returns:** D

- A reference to the modified destination object.

Defined in: fn/multiply.ts:20

___

### negate

▸ **negate**<T\>(`target`: T): T

Negate a vector.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | T | The target vector. |

**Returns:** T

- A reference to the modified target vector.

Defined in: fn/negate.ts:12

▸ **negate**<T, D\>(`target`: T, `dest?`: D): D

Calculate vec2 absolute value.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |
| `D` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | T | The target vector. |
| `dest?` | D | Destination object to store the result. |

**Returns:** D

- A reference to the modified destination vector.

Defined in: fn/negate.ts:20

___

### normalize

▸ **normalize**<T\>(`target`: T): T

Normalize a vector.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | T | Target can be vec object or array. |

**Returns:** T

- The modified target object.

Defined in: fn/normalize.ts:13

▸ **normalize**<T, D\>(`target`: T, `dest?`: D): D

Normalize a vector.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |
| `D` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | T | Target can be vec object or array. |
| `dest?` | D | destination object to store the result. |

**Returns:** D

- A reference to the destination object.

Defined in: fn/normalize.ts:21

___

### rotate

▸ **rotate**<T\>(`target`: T, `angle`: *number*): T

Rotate a vector around zero point.

**`readonly`** - A reference to the modified target vector.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | T | The target vector. |
| `angle` | *number* | The amount of rotation to apply in radians. |

**Returns:** T

Defined in: fn/rotate.ts:14

▸ **rotate**<T, D\>(`target`: T, `angle`: *number*, `dest?`: D): D

Rotate a vector around zero point.

**`readonly`** - A reference to the modified destination vector.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |
| `D` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | T | The target vector. |
| `angle` | *number* | The amount of rotation to apply in radians. |
| `dest?` | D | Optional destination object to store the result. |

**Returns:** D

Defined in: fn/rotate.ts:23

___

### subtract

▸ **subtract**<T\>(`target`: T, `value`: [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) \| *number*): T

Subtract one vector from another.

**`example`**

```ts
subtract({ x: 1, y: 1 }, { x: 1, y: 1 }); // -> { x: 0, y: 0 }
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | T | The target vector. |
| `value` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) \| *number* | The vector to subtract. |

**Returns:** T

- A reference to the modified target vector.

Defined in: fn/subtract.ts:17

▸ **subtract**<T, V, D\>(`target`: T, `value`: V \| *number*, `dest?`: D): D

Subtract one vector from another.

**`example`**

```ts
let result = { x: 0, y: 0 };
subtract({ x: 1, y: 1 }, { x: 1, y: 1 }, result); // -> { x: 0, y: 0 }
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |
| `V` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |
| `D` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | T | The target vector. |
| `value` | V \| *number* | The vector to subtract. |
| `dest?` | D | Destination object to store the result. |

**Returns:** D

- A reference to the modified destination vector.

Defined in: fn/subtract.ts:33

___

### toArray

▸ **toArray**<T\>(`target`: T): [*Vec2Array*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2array)

Convert a vec2-like object to an array.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Vec2*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/interfaces/vec2.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | T |

**Returns:** [*Vec2Array*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2array)

- Newly created array.

Defined in: fn/to-array.ts:12

___

### toObject

▸ **toObject**<T\>(`target`: T): [*Vec2*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/interfaces/vec2.md)

Convert a vec2-like array to an object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*number*, *number*] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | T |

**Returns:** [*Vec2*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/interfaces/vec2.md)

- Newly created Vec2 object.

Defined in: fn/to-object.ts:12

___

### zero

▸ **zero**<T\>(`target`: T): T

Set vector to zero.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Vec2Param*](https://github.com/lloydevans/vec2-fn/blob/main/docs/md/README.md#vec2param) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | T | Target Vec2-like object the values will be written to. |

**Returns:** T

- A reference to the object the result was written to.

Defined in: fn/zero.ts:12
