# miche
A simple multi-index cache for JavaScript for objects

### Usage

```js
import MultiIndexCache from '@duailibe/miche';

const cachedFn = MultiIndexCache(fn);

// this will be cached
cachedFn(objA, objB, objC);
```
