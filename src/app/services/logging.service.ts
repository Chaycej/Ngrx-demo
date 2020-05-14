import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class LoggingService {
  constructor() {}

  logIncrement(): Observable<string> {
    return this.logMessage('Logged increment event');
  }

  logDecrement(): Observable<string> {
    return this.logMessage('Logged decrement event');
  }

  logCustomValue(): Observable<string> {
    return this.logMessage('Logged custom value event');
  }

  logMessage(message: string): Observable<string> {
    return new Observable(obs => {
      const successMessage = of(message);
      successMessage.pipe(delay(500)).subscribe(message => {
        obs.next(message);
        obs.complete();
      });
    });
  }
}