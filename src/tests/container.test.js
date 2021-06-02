import { Container } from "../container/Container.js";

describe("Container function", () => {
  let container = new Container();

  test("Should by defined:", () => {
    expect(container.clear()).toBeDefined();
  });

  test("Should compare all elements:", () => {
    expect(container.clear()).toEqual([]);
  });

  test("Should check for the content:", () => {
    expect(container.clear()).not.toContain(false);
  });
});
