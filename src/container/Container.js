export class Container {
  constructor() {
    this.arr = [];
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
