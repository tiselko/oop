import { relationship, compare } from "../functions/functions";

export class Container {
  constructor() {
    this.arr = [];
  }

  sorting() {
    this.arr.sort((a, b) =>
      compare(relationship(a.power), relationship(b.power))
    );
  }

  clear() {
    this.arr = [];
  }

  skip(file) {
    this.arr.forEach((obj) => {
      obj.skip(file, obj);
    });
  }
}
