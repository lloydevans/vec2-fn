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

// Assign named
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
