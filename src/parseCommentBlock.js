const { parse } = require("doctrine");

/**
 * @param comment {object}
 */
function parseCommentBlock(comment) {
  return parse(comment.value, { unwrap: true });
}

module.exports = parseCommentBlock;
