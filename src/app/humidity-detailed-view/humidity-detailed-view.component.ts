import { Component, OnInit } from '@angular/core';
import { RecordedDataEntry } from '../models/recordedDataEntry';
import { HumidityService } from '../services/humidity/humidity.service';

@Component({
  selector: 'app-humidity-detailed-view',
  templateUrl: './humidity-detailed-view.component.html',
  styleUrls: ['./humidity-detailed-view.component.scss']
})
export class HumidityDetailedViewComponent implements OnInit {

  tableValues: RecordedDataEntry[] = [];

  constructor(private temperatureService: HumidityService) { }

  ngOnInit(): void {
    this.tableValues = this.temperatureService.getTableValues();
  }
}
