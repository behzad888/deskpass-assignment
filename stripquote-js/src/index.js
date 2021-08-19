/**
 * strip quote characters from a string
 *
 * ' \u0022
 * " \u0027
 * ‘ \u2018    ’  \u2019
 * “ \u201C    ”  \u201D
 * ‹ \u2039    ›   \u203A
 * « \u00AB    »   \u203A
 *
 * @param  {String} query
 * @return {String}
 */
export const stripquotes = function stripquotes(query) {
  if (typeof query !== 'string')
    throw new Error(
      `Type '${typeof query}' is not assignable to parameter of type 'string'`
    );
  if (!query.length) throw new Error(`Argument should not be empty`);

  //Replace single quotes first because we need to keep apostrophes.
  //This also works with apostrophes at the end of a plural noun to show possession (s').
  query = query.replace(/['](?=\W\s-'|$)|(?<=\W|^)[']/g, ''); //\u0022
  query = query.replace(/[’](?=\w\s-’|\W\s-’|$)/g, ''); //\u2019

  return query.replace(/["‘“‹«](?=\w|\W|$)|(?<=\w|\W|^)["”›»]/g, '');
};

module.exports = stripquotes;
