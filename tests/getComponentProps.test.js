import getComponentProps from "../src/getComponentProps";
import parseSingleFileComponent from "../src/parseSingleFileComponent";
import { fixturePaths } from "./helpers";

const pathToComponent = fixturePaths.Component;
const { script } = parseSingleFileComponent(pathToComponent);

const componentProps = getComponentProps({
  script,
  pathToComponent
});

test("returns an array of props", () => {
  expect(Array.isArray(componentProps)).toBeTruthy();
});

test("the array contains these keys", () => {
  componentProps.every(prop => {
    expect(Object.keys(prop)).toEqual(["name", "location", "definition"]);
  });
});
