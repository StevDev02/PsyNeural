"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-resolve-all@2.0.0";
exports.ids = ["vendor-chunks/micromark-util-resolve-all@2.0.0"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/micromark-util-resolve-all@2.0.0/node_modules/micromark-util-resolve-all/index.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/micromark-util-resolve-all@2.0.0/node_modules/micromark-util-resolve-all/index.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resolveAll: () => (/* binding */ resolveAll)\n/* harmony export */ });\n/**\n * @typedef {import('micromark-util-types').Event} Event\n * @typedef {import('micromark-util-types').Resolver} Resolver\n * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext\n */\n\n/**\n * Call all `resolveAll`s.\n *\n * @param {Array<{resolveAll?: Resolver | undefined}>} constructs\n *   List of constructs, optionally with `resolveAll`s.\n * @param {Array<Event>} events\n *   List of events.\n * @param {TokenizeContext} context\n *   Context used by `tokenize`.\n * @returns {Array<Event>}\n *   Changed events.\n */\nfunction resolveAll(constructs, events, context) {\n  /** @type {Array<Resolver>} */\n  const called = []\n  let index = -1\n\n  while (++index < constructs.length) {\n    const resolve = constructs[index].resolveAll\n\n    if (resolve && !called.includes(resolve)) {\n      events = resolve(events, context)\n      called.push(resolve)\n    }\n  }\n\n  return events\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbWljcm9tYXJrLXV0aWwtcmVzb2x2ZS1hbGxAMi4wLjAvbm9kZV9tb2R1bGVzL21pY3JvbWFyay11dGlsLXJlc29sdmUtYWxsL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBLGFBQWEsc0NBQXNDO0FBQ25ELGFBQWEseUNBQXlDO0FBQ3RELGFBQWEsZ0RBQWdEO0FBQzdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTyxrQ0FBa0MsR0FBRztBQUN2RDtBQUNBLFdBQVcsY0FBYztBQUN6QjtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDTztBQUNQLGFBQWEsaUJBQWlCO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wc3luZXVyYWwvLi9ub2RlX21vZHVsZXMvLnBucG0vbWljcm9tYXJrLXV0aWwtcmVzb2x2ZS1hbGxAMi4wLjAvbm9kZV9tb2R1bGVzL21pY3JvbWFyay11dGlsLXJlc29sdmUtYWxsL2luZGV4LmpzP2Y5YmMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkV2ZW50fSBFdmVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5SZXNvbHZlcn0gUmVzb2x2ZXJcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuVG9rZW5pemVDb250ZXh0fSBUb2tlbml6ZUNvbnRleHRcbiAqL1xuXG4vKipcbiAqIENhbGwgYWxsIGByZXNvbHZlQWxsYHMuXG4gKlxuICogQHBhcmFtIHtBcnJheTx7cmVzb2x2ZUFsbD86IFJlc29sdmVyIHwgdW5kZWZpbmVkfT59IGNvbnN0cnVjdHNcbiAqICAgTGlzdCBvZiBjb25zdHJ1Y3RzLCBvcHRpb25hbGx5IHdpdGggYHJlc29sdmVBbGxgcy5cbiAqIEBwYXJhbSB7QXJyYXk8RXZlbnQ+fSBldmVudHNcbiAqICAgTGlzdCBvZiBldmVudHMuXG4gKiBAcGFyYW0ge1Rva2VuaXplQ29udGV4dH0gY29udGV4dFxuICogICBDb250ZXh0IHVzZWQgYnkgYHRva2VuaXplYC5cbiAqIEByZXR1cm5zIHtBcnJheTxFdmVudD59XG4gKiAgIENoYW5nZWQgZXZlbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUFsbChjb25zdHJ1Y3RzLCBldmVudHMsIGNvbnRleHQpIHtcbiAgLyoqIEB0eXBlIHtBcnJheTxSZXNvbHZlcj59ICovXG4gIGNvbnN0IGNhbGxlZCA9IFtdXG4gIGxldCBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCsraW5kZXggPCBjb25zdHJ1Y3RzLmxlbmd0aCkge1xuICAgIGNvbnN0IHJlc29sdmUgPSBjb25zdHJ1Y3RzW2luZGV4XS5yZXNvbHZlQWxsXG5cbiAgICBpZiAocmVzb2x2ZSAmJiAhY2FsbGVkLmluY2x1ZGVzKHJlc29sdmUpKSB7XG4gICAgICBldmVudHMgPSByZXNvbHZlKGV2ZW50cywgY29udGV4dClcbiAgICAgIGNhbGxlZC5wdXNoKHJlc29sdmUpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGV2ZW50c1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/micromark-util-resolve-all@2.0.0/node_modules/micromark-util-resolve-all/index.js\n");

/***/ })

};
;