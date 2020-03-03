const { parse } = require("@babel/parser");
const traverseAndFindProps = require("./traverseAndFindProps.js");
const getPropDefinition = require("./getPropDefinition.js");
const parseCommentBlock = require('./parseCommentBlock');

/**
 *
 * @param script {SFCBlock}
 * @param pathToComponent
 * @param parserOptions
 * @return {*[]}
 */
function getComponentProps(
  { script, pathToComponent },
  parserOptions = { sourceType: "module" }
) {
  const ast = parse(script.content, parserOptions);

  return traverseAndFindProps(ast).map(path => ({
    name: path.key.name,
    location: path.loc,
    definition: script.content.substring(path.start, path.end),
    jsdoc: parseCommentBlock(path.leadingComments[0] || {value: ''})
  }));
}

module.exports = getComponentProps;
