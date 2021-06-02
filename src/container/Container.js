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
    return this.arr;
  }

  skip(file) {
    this.arr.forEach((obj) => {
      obj.skip(file, obj);
    });
  }

  multimethod(file) {
    for (let i = 0; i < this.arr.length - 1; i++) {
      for (let j = i + 1; j < this.arr.length; j++) {
        this.arr[i].multimethod(this.arr[i], this.arr[j], file);
      }
    }
  }
}
