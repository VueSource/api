import getParsedComponentMixins from "../src/getComponentMixins";
import parseSingleFileComponent from "../src/parseSingleFileComponent";
import { fixturePaths } from "./helpers";

const pathToComponent = fixturePaths.Component;
const { script } = parseSingleFileComponent(pathToComponent);

test("determine the mixins for a component", () => {
  expect(
    getParsedComponentMixins({
      script,
      pathToComponent
    })
  ).toEqual([fixturePaths.sizeMixin]);
});

test("resolve the mixins for a component", () => {});
