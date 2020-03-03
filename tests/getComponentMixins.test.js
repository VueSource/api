import getComponentMixins from "../src/getComponentMixins";
import parseSingleFileComponent from "../src/parseSingleFileComponent";
import { fixturePaths } from "./helpers";

const pathToComponent = fixturePaths.Component;
const { script } = parseSingleFileComponent(pathToComponent);

test("resolve the mixins for a component", () => {
  expect(
    getComponentMixins({
      script,
      pathToComponent
    })
  ).toEqual([fixturePaths.sizeMixin]);
});
