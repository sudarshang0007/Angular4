import {Injectable} from '@angular/core';

@Injectable()
export class DateService {

  constructor() {}

  getDate(): string {
    return new Date().toDateString();
  }
}
