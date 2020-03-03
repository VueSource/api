const { parse } = require("@babel/parser");
const traverseAndFindProps = require("./traverseAndFindProps.js");

/**
 * @param propName {string}
 * @param script {SFCBlock}
 * @param parserOptions
 */
function getRawPropDefinition(
  propName,
  script,
  parserOptions = { sourceType: "module" }
) {
  const ast = parse(script.content, parserOptions);
  const props = traverseAndFindProps(ast);

  const { start, end } = props.find(node => node.key.name === propName);
  return script.content.substring(start, end);
}

module.exports = getRawPropDefinition;
