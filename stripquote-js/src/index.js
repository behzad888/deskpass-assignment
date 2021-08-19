/**
 * strip quote characters from a string
 *
 * @param  {String} query
 * @return {String}
 */
export const stripquotes = function stripquotes(query) {
  if (typeof query !== 'string')
    throw new Error(`input was '${typeof query}' and not of type 'string'`);
  if (!query.length) throw new Error(`input was empty`);

  // ' \u0022
  // " \u0027
  // ‘ \u2018    ’  \u2019
  // “ \u201C    ”  \u201D
  // ‹ \u2039    ›   \u203A
  // « \u00AB    »   \u203A
  return query.replace(/['"‘“‹«](?=\W|$)|(?<=\W|^)['"’”›»]/g, '');
};

module.exports = stripquotes;
