import {Injectable} from '@angular/core';

@Injectable()
export class DateService {

  constructor() {}

  getDate(): number {
    return new Date().getDate();
  }
}
