const t = require("@babel/types");
const { parse } = require("@babel/parser");
const traverse = require("@babel/traverse");

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
  const props = [];
  const ast = parse(script.content, parserOptions);

  traverse.default(ast, {
    enter(path) {
      if (
        t.isObjectExpression(path) &&
        t.isObjectProperty(path.parentPath) &&
        path.parentPath.node.key.name === "props"
      ) {
        props.push(...path.node.properties);
      }
    }
  });

  const { start, end } = props.find(node => node.key.name === propName);

  return script.content.substring(start, end);
}

module.exports = getRawPropDefinition;
