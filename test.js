"use strict";

const MultiIndexCache = require("./");

test("it works", () => {
  const fn = jest.fn();
  const cached = MultiIndexCache(fn);

  const a = {};
  const b = {};
  const c = {};
  const d = {};

  cached(a);
  cached(a, b);
  cached(b, c);
  cached(a, b, c);
  expect(fn).toHaveBeenCalledTimes(4);

  cached(a);
  expect(fn).toHaveBeenCalledTimes(4);

  cached(a, b);
  expect(fn).toHaveBeenCalledTimes(4);

  cached(b, c);
  expect(fn).toHaveBeenCalledTimes(4);

  cached(a, b, c);
  expect(fn).toHaveBeenCalledTimes(4);

  // number of arguments > max depth of index
  cached(a, b, c, d);
  cached(a, b, c, d);
  expect(fn).toHaveBeenCalledTimes(6);
});
