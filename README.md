# miche
A simple multi-index cache for JavaScript for objects

### Why

This cache was built for caching specifically functions that receive objects as arguments, thus using the object references as cache keys.

### Usage

```js
import MultiIndexCache from '@duailibe/miche';

const cachedFn = MultiIndexCache(fn);

// this will be cached
cachedFn(objA, objB, objC);
```
