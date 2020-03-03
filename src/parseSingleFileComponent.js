const fs = require("fs");
const path = require("path");
const compiler = require("vue-template-compiler");

const getComponentMixins = require("./getComponentMixins");
const getComponentProps = require("./getComponentProps");

/**
 * @param pathToComponent
 * @return {{template: SFCBlock, path: *, mixins: unknown[], script: SFCBlock, props: *[]}}
 */
function parseSingleFileComponent(pathToComponent) {
  const file = fs.readFileSync(path.resolve(pathToComponent)).toString();
  const { template, script } = compiler.parseComponent(file);

  return {
    script,
    template,
    path: pathToComponent,
    props: getComponentProps({ script, pathToComponent }),
    mixins: getComponentMixins({ script, pathToComponent })
  };
}

module.exports = parseSingleFileComponent;
