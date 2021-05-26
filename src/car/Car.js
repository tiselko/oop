import { Transport } from "../transport/Transport";

export class Car extends Transport {
  constructor({ speed, power, fuel }) {
    super({ power, fuel });
    this.speed = speed;
    this.className = "Car";
  }

  buildObjectFromStr(obj) {
    let str = "Машина: ";

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
      case "Car":
        this.car(objectOne, objectTwo, file);
        break;
      default:
        return 0;
    }
  }

  truck(objectOne, objectTwo, file) {
    file.writeStrFromFile(this.buildObjectFromStr(objectOne));
    file.writeStrFromFile(objectTwo.buildObjectFromStr(objectTwo));
    file.writeStrFromFile("Car - Truck");
  }

  bus(objectOne, objectTwo, file) {
    file.writeStrFromFile(this.buildObjectFromStr(objectOne));
    file.writeStrFromFile(objectTwo.buildObjectFromStr(objectTwo));
    file.writeStrFromFile("Car - Bus");
  }

  car(objectOne, objectTwo, file) {
    file.writeStrFromFile(this.buildObjectFromStr(objectOne));
    file.writeStrFromFile(objectTwo.buildObjectFromStr(objectTwo));
    file.writeStrFromFile("Car - Car");
  }
}
