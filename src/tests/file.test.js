import { File } from "../file/File.js";

describe("File clear function", () => {
  let file = new File("1.txt", "2.txt");

  test("Should by defined:", () => {
    expect(file.clearFile()).toBeDefined();
  });

  test("Should compare all elements:", () => {
    expect(file.clearFile()).toEqual([""]);
  });

  test("Should check for the content:", () => {
    expect(file.clearFile()).not.toContain(false);
  });
});

describe("File exists function", () => {
  let file = new File("1.txt", "2.txt");

  test("Should by defined:", () => {
    expect(file.exists()).toBeDefined();
  });

  test("Should compare all elements:", () => {
    expect(file.exists()).toEqual(true);
  });

  test("Should check for the content:", () => {
    expect(file.exists()).not.toContain(false);
  });
});
