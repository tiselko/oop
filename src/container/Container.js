export class Container {
  constructor() {
    this.arr = [];
  }

  clear() {
    this.arr = [];
  }

  multimethod(file) {
    for (let i = 0; i < this.arr.length - 1; i++) {
      for (let j = i + 1; j < this.arr.length; j++) {
        this.arr[i].multimethod(this.arr[i], this.arr[j], file);
      }
    }
  }
}
