# jest-mocking-example
Reproduction repo for problem with Jest mocking

To see the issue do `npm run test`

```javascript
 »» npm run test

> jest-mocking@1.0.0 test
> jest

 FAIL  ./callingRandom.test.js
  ● Test suite failed to run

    Cannot find module 'Random.id' from 'callingRandom.test.js'

      2 | import callingRandom from "./callingRandom.js";
      3 |
    > 4 | jest.mock("Random");
        |      ^
      5 | jest.mockImplementation(() => "someRandomString");
      6 |
      7 | test("test that calling a function that uses random uses the mock", () => {

      at Resolver.resolveModule (node_modules/jest-resolve/build/index.js:306:11)
      at Object.<anonymous> (callingRandom.test.js:4:6)

```
