import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtcDateTimeService {
  constructor() {}
  // UTC time send to server
  public getUTC() {
    const now = new Date();
    return new Date(now.getTime() + now.getTimezoneOffset() * 60000);
  }

  // UTC Time Resived to convert
  public getUTCtoLocal(utcDateTime: any) {
    const date = new Date(utcDateTime);
    return new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000);
  }
}
