import getRawPropDefinition from "../src/getPropDefinition";
import parseFile from "../src/parseSingleFileComponent";
import path from "path";

const filePath = path.resolve(__dirname, "fixtures/Component.vue");

test("finds the search prop definition", () => {
  const { script } = parseFile(filePath);
  const search = getRawPropDefinition("search", script.content);

  expect(search).toEqual(
    `search: {
      type: Function,

      /**
       * Do something with a different thing.
       *
       * @param {String} needle - the search query
       * @param {Object} config
       * @param {String} config.haystack
       * @return {String}
       */
      default(needle, { haystack }) {
        return [haystack].toString();
      }
    }`
  );
});

test("finds the name prop definition", () => {
  const { script } = parseFile(filePath);
  const name = getRawPropDefinition("name", script.content);

  expect(name).toEqual(`name: String`);
});
