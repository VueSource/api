const t = require("@babel/types");
const { parse } = require("@babel/parser");
const traverse = require("@babel/traverse");
const path = require("path");

function getParsedComponentMixin(
  component,
  parserOptions = { sourceType: "module" }
) {
  const mixins = [];
  const componentImports = [];
  const ast = parse(component.script.content, parserOptions);

  traverse.default(ast, {
    enter(path) {
      if (t.isImportDeclaration(path)) {
        componentImports.push({
          name: path.node.specifiers[0].local.name,
          relativePath: path.node.source.value
        });
      } else if (
        t.isArrayExpression(path) &&
        t.isObjectProperty(path.parentPath) &&
        path.parentPath.node.key.name === "mixins"
      ) {
        mixins.push(...path.node.elements.map(({ name }) => name));
      }
    }
  });

  return componentImports
    .map(({ name, relativePath }) => {
      if (mixins.includes(name)) {
        const directory = component.path.replace(
          path.basename(component.path),
          ""
        );
        return path.resolve(directory, relativePath);
      }
    })
    .filter(mixin => mixin);
}

module.exports = getParsedComponentMixin;
