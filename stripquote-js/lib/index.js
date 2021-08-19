"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stripquotes = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * strip quote characters from a string
 *
 * @param  {String} query
 * @return {String}
 */
var stripquotes = function stripquotes(query) {
  if (typeof query !== 'string') throw new Error("input was '".concat(_typeof(query), "' and not of type 'string'"));
  if (!query.length) throw new Error("input was empty"); // ' \u0022
  // " \u0027
  // ‘ \u2018    ’  \u2019
  // “ \u201C    ”  \u201D
  // ‹ \u2039    ›   \u203A
  // « \u00AB    »   \u203A

  return query.replace(/['"‘“‹«](?=\W|$)|(?<=\W|^)['"’”›»]/g, '');
};

exports.stripquotes = stripquotes;
module.exports = stripquotes;