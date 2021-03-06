import { Truck } from "../truck/Truck";
import { Bus } from "../bus/Bus";
import { Car } from "../car/Car";

export function switchedObject(array, container) {
  let truck = null;
  let bus = null;
  let car = null;

  array.forEach((element) => {
    let params = {
      id: element[0],
      value: element[1],
      power: element[2],
      fuel: element[3],
    };

    switch (params.id) {
      case "1":
        let truckParams = {
          payload: params.value,
          power: params.power,
          fuel: params.fuel,
        };
        truck = new Truck(truckParams);
        container.arr.push(truck);
        break;
      case "2":
        const busParams = {
          capacity: params.value,
          power: params.power,
          fuel: params.fuel,
        };
        bus = new Bus(busParams);
        container.arr.push(bus);
        break;
      case "3":
        const carParams = {
          speed: params.value,
          power: params.power,
          fuel: params.fuel,
        };
        car = new Car(carParams);
        container.arr.push(car);
        break;
      default:
        break;
    }
  });
}

export function correctFile(data) {
  return data.map((element) => {
    return element.replace("\r", "");
  });
}

export function relationship(power) {
  let weightPeople = 75;
  return weightPeople / power;
}

export function compare(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

export function checkCorrectData(array) {
  array.forEach((item) => {
    if (!Number.isInteger(Number(item[0]))) {
      throw "Ошибка в id!";
    }
  });
}
