import { Transport } from "../transport/Transport";

export class Truck extends Transport {
  constructor({ payload, power }) {
    super({ power });
    this.payload = payload;
  }

  buildObjectFromStr(obj) {
    let str = "Грузовик: ";

    Object.keys(obj).forEach((key) => {
      str += `${key}: ${obj[key]} `;
    });

    return str;
  }
}
