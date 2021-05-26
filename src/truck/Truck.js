import { Transport } from "../transport/Transport";

export class Truck extends Transport {
  constructor({ payload, power }) {
    super({ power });
    this.payload = payload;
    this.className = "Truck";
  }

  buildObjectFromStr(obj) {
    let str = "Грузовик: ";

    Object.keys(obj).forEach((key) => {
      str += `${key}: ${obj[key]} `;
    });

    return str;
  }

  multimethod(objectOne, objectTwo, file) {
    switch (objectTwo.className) {
      case "Truck":
        this.truck(objectOne, objectTwo, file);
        break;
      case "Bus":
        this.bus(objectOne, objectTwo, file);
        break;
      default:
        return 0;
    }
  }

  truck(objectOne, objectTwo, file) {
    file.writeStrFromFile(this.buildObjectFromStr(objectOne));
    file.writeStrFromFile(objectTwo.buildObjectFromStr(objectTwo));
    file.writeStrFromFile("Truck - Truck");
  }

  bus(objectOne, objectTwo, file) {
    file.writeStrFromFile(this.buildObjectFromStr(objectOne));
    file.writeStrFromFile(objectTwo.buildObjectFromStr(objectTwo));
    file.writeStrFromFile("Truck - Bus");
  }
}
