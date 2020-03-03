const t = require("@babel/types");
const traverse = require("@babel/traverse");

/**
 * Traverse a parsed AST, find and return any props.
 * @param ast
 * @return {[<NodePath>]}
 */
function traverseAndFindProps(ast) {
  const props = [];

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

  return props;
}

module.exports = traverseAndFindProps;
