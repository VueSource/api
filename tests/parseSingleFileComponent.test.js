import parseSingleFileComponent from "../src/parseSingleFileComponent";
import { fixturePaths } from "./helpers";

const parsed = parseSingleFileComponent(fixturePaths.Component);

test("includes the component template", () => {
  expect(parsed.template).toBeTruthy();
});

test("includes the component script", () => {
  expect(parsed.script).toBeTruthy();
});

test("includes the component path", () => {
  expect(parsed.path).toEqual(fixturePaths.Component);
});

test("includes the component props", () => {
  expect(parsed.props).toBeTruthy();
});
