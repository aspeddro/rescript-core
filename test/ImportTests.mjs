// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Test from "./Test.mjs";

async function main() {
  var eq = await import("./IntTests.mjs").then(function (m) {
        return m.eq;
      });
  return Test.run([
              [
                "ImportTests.res",
                5,
                22,
                61
              ],
              "import - range - positive, increasing"
            ], 1, eq, 1);
}

export {
  main ,
}
/* Test Not a pure module */
