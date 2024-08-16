import { Injectable } from '@angular/core';

@Injectable()
export class LoggerSelfService {

  log(message: string) {
    console.log(message);
  }
}
