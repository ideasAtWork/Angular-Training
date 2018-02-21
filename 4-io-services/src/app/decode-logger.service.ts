import { Injectable } from "@angular/core";

@Injectable()
export class DecodeLoggerService {
  loggerType: string;

  // constructor(loggerType: string) {
  //   this.loggerType = loggerType;
  // }

  constructor() {}

  debug(message) {
    console.log(`${this.loggerType}: ${message}`);
  }
}
