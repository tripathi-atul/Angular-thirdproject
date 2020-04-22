import { Injectable } from '@angular/core';

@Injectable()
export class TestServiceService {

  printToConsole(arg: string) {
    console.log(arg);
  }

}
