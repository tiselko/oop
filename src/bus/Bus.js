import { Transport } from "../transport/Transport";

export class Bus extends Transport {
  constructor({ capacity, power, fuel }) {
    super({ power, fuel });
    this.capacity = capacity;
    this.className = "Bus";
  }

  buildObjectFromStr(obj) {
    let str = "Автобус: ";

    Object.keys(obj).forEach((key) => {
      str += `${key}: ${obj[key]} `;
    });

    return str;
  }

  skip() {}

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
    file.writeStrFromFile("Bus - Truck");
  }

  bus(objectOne, objectTwo, file) {
    file.writeStrFromFile(this.buildObjectFromStr(objectOne));
    file.writeStrFromFile(objectTwo.buildObjectFromStr(objectTwo));
    file.writeStrFromFile("Bus - Bus");
  }
}
