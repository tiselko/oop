import { correctFile } from "../functions/functions";
import fs from "fs";

export class File {
  constructor(filePathInput, filePathOutput) {
    this.filePathInput = filePathInput;
    this.filePathOutput = filePathOutput;
    this.file = [];
  }

  readFile() {
    this.file = correctFile(
      fs.readFileSync(this.filePathInput, "utf-8").toString().split("\n")
    );
  }

  exists() {
    return fs.existsSync(this.filePathInput);
  }

  writeStrFromFile(str) {
    fs.appendFileSync(this.filePathOutput, str + "\n");
  }

  buildFileFromArray() {
    return this.file.map((element) => {
      return element.split(" ");
    });
  }

  writeContainerFromFile(array) {
    array.forEach((obj) => {
      this.writeStrFromFile(obj.buildObjectFromStr(obj));
    });
  }

  clearFile() {
    fs.writeFile(this.filePathOutput.toString(), "", () => {});
    return fs.readFileSync(this.filePathOutput, "utf-8").toString().split("\n");
  }
}
