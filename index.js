"use strict";

module.exports = function MultiIndexCache(fn, maxDepth = 3) {
  const caches = [];

  return function() {
    const args = Array.from(arguments);
    const len = args.length;

    if (!len || len > maxDepth) {
      return fn.apply(void 0, args);
    }

    let cache = (caches[len - 1] = caches[len - 1] || new WeakMap());

    let i = 0;
    while (i < len - 1) {
      if (!cache.has(args[i])) {
        cache.set(args[i], new WeakMap());
      }
      cache = cache.get(args[i]);
      i++;
    }

    if (!cache.has(args[i])) {
      cache.set(args[i], fn.apply(void 0, args));
    }

    return cache.get(args[i]);
  };
};
