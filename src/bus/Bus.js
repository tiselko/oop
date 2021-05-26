import { Transport } from "../transport/Transport";

export class Bus extends Transport {
  constructor({ capacity, power }) {
    super({ power });
    this.capacity = capacity;
  }

  buildObjectFromStr(obj) {
    let str = "Автобус: ";

    Object.keys(obj).forEach((key) => {
      str += `${key}: ${obj[key]} `;
    });

    return str;
  }
}
