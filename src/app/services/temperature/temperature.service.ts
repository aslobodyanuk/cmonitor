import { Injectable } from '@angular/core';
import { RecordedDataEntry } from 'src/app/models/recordedDataEntry';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

  constructor() { }

  getTableValues(): RecordedDataEntry[] {
    return [
      {
        id: 1,
        value: 34,
        created: new Date()
      },
      {
        id: 2,
        value: 36,
        created: new Date()
      },
      {
        id: 3,
        value: 32,
        created: new Date()
      },
      {
        id: 4,
        value: 31,
        created: new Date()
      },
      {
        id: 5,
        value: 30,
        created: new Date()
      }
    ];
  }
}
