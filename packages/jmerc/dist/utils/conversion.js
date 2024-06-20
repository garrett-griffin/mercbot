"use strict";

/**
 * Converts floats in an object to strings.
 *
 * @param {object} obj - The object to convert.
 * @returns {object} The object with floats converted to strings.
 */
function convertFloatsToStrings(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  var convertedObj = {};
  for (var _i = 0, _Object$entries = Object.entries(obj); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _Object$entries[_i],
      key = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    if (typeof value === 'object' && value !== null) {
      convertedObj[key] = convertFloatsToStrings(value);
    } else if (typeof value === 'number' && !Number.isInteger(value)) {
      convertedObj[key] = value.toString();
    } else {
      convertedObj[key] = value;
    }
  }
  return convertedObj;
}
module.exports = {
  convertFloatsToStrings: convertFloatsToStrings
};