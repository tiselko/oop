import { Transport } from "../transport/Transport";

export class Car extends Transport {
  constructor({ speed, power }) {
    super({ power });
    this.speed = speed;
  }

  buildObjectFromStr(obj) {
    let str = "Машина: ";

    Object.keys(obj).forEach((key) => {
      str += `${key}: ${obj[key]} `;
    });

    return str;
  }
}
