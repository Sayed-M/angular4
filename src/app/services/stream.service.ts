import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StreamService {

  dataStream: Observable<string>;

  constructor() { }

  createStream() {
    this.dataStream = new Observable(observer => {

      setTimeout(() => {
        observer.next('value1');
      }, 1000);
      setTimeout(() => {
        observer.next('value2');
      }, 3000);
      setTimeout(() => {
        observer.next('value3');
      }, 5000);
      setTimeout(() => {
        observer.complete();
      }, 7000);
    });

    return this.dataStream;

  }

}
