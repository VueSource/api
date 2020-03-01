import getParsedComponentMixins from "../src/getParsedComponentMixins";
import parseSingleFileComponent from "../src/parseSingleFileComponent";
import { fixturePaths } from "./helpers";

const component = parseSingleFileComponent(fixturePaths.Component);

test("determine the mixins for a component", () => {
  expect(getParsedComponentMixins(component)).toEqual([fixturePaths.sizeMixin]);
});

test("resolve the mixins for a component", () => {});
