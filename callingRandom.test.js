import Random from "@reactioncommerce/random";
import callingRandom from "./callingRandom.js";

jest.mock("Random");
Random.mockImplementation(() => "someRandomString");

test("test that calling a function that uses random uses the mock", () => {
  const results = callingRandom();
  expect(results).toEqual("someRandomString");
});
