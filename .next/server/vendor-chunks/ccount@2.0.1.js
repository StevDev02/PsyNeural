"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/ccount@2.0.1";
exports.ids = ["vendor-chunks/ccount@2.0.1"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/ccount@2.0.1/node_modules/ccount/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/.pnpm/ccount@2.0.1/node_modules/ccount/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ccount: () => (/* binding */ ccount)\n/* harmony export */ });\n/**\n * Count how often a character (or substring) is used in a string.\n *\n * @param {string} value\n *   Value to search in.\n * @param {string} character\n *   Character (or substring) to look for.\n * @return {number}\n *   Number of times `character` occurred in `value`.\n */\nfunction ccount(value, character) {\n  const source = String(value)\n\n  if (typeof character !== 'string') {\n    throw new TypeError('Expected character')\n  }\n\n  let count = 0\n  let index = source.indexOf(character)\n\n  while (index !== -1) {\n    count++\n    index = source.indexOf(character, index + character.length)\n  }\n\n  return count\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vY2NvdW50QDIuMC4xL25vZGVfbW9kdWxlcy9jY291bnQvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ087QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHN5bmV1cmFsLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2Njb3VudEAyLjAuMS9ub2RlX21vZHVsZXMvY2NvdW50L2luZGV4LmpzPzMxY2MiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3VudCBob3cgb2Z0ZW4gYSBjaGFyYWN0ZXIgKG9yIHN1YnN0cmluZykgaXMgdXNlZCBpbiBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqICAgVmFsdWUgdG8gc2VhcmNoIGluLlxuICogQHBhcmFtIHtzdHJpbmd9IGNoYXJhY3RlclxuICogICBDaGFyYWN0ZXIgKG9yIHN1YnN0cmluZykgdG8gbG9vayBmb3IuXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKiAgIE51bWJlciBvZiB0aW1lcyBgY2hhcmFjdGVyYCBvY2N1cnJlZCBpbiBgdmFsdWVgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2NvdW50KHZhbHVlLCBjaGFyYWN0ZXIpIHtcbiAgY29uc3Qgc291cmNlID0gU3RyaW5nKHZhbHVlKVxuXG4gIGlmICh0eXBlb2YgY2hhcmFjdGVyICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGNoYXJhY3RlcicpXG4gIH1cblxuICBsZXQgY291bnQgPSAwXG4gIGxldCBpbmRleCA9IHNvdXJjZS5pbmRleE9mKGNoYXJhY3RlcilcblxuICB3aGlsZSAoaW5kZXggIT09IC0xKSB7XG4gICAgY291bnQrK1xuICAgIGluZGV4ID0gc291cmNlLmluZGV4T2YoY2hhcmFjdGVyLCBpbmRleCArIGNoYXJhY3Rlci5sZW5ndGgpXG4gIH1cblxuICByZXR1cm4gY291bnRcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/ccount@2.0.1/node_modules/ccount/index.js\n");

/***/ })

};
;