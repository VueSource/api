const fs = require("fs");
const path = require("path");
const compiler = require("vue-template-compiler");

/**
 * @param filePath
 * @return {SFCDescriptor}
 */
function parseSingleFileComponent(filePath) {
  const file = fs.readFileSync(path.resolve(filePath)).toString();
  return compiler.parseComponent(file);
}

module.exports = parseSingleFileComponent;
