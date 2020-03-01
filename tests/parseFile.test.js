import path from "path";
import parseSingleFileComponent from "../src/parseSingleFileComponent";
import { fixturePaths } from "./helpers";

test("parses single file components", () => {
  const parsed = parseSingleFileComponent(fixturePaths.Component);

  expect(parsed.template).toBeTruthy();
  expect(parsed.script).toBeTruthy();
});
