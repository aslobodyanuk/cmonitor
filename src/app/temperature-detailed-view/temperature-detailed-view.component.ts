import { Component, OnInit } from '@angular/core';
import { RecordedDataEntry } from '../models/recordedDataEntry';
import { TemperatureService } from '../services/temperature/temperature.service';

@Component({
  selector: 'app-temperature-detailed-view',
  templateUrl: './temperature-detailed-view.component.html',
  styleUrls: ['./temperature-detailed-view.component.scss']
})
export class TemperatureDetailedViewComponent implements OnInit {

  tableValues: RecordedDataEntry[] = [];

  constructor(private temperatureService: TemperatureService) { }

  ngOnInit(): void {
    this.tableValues = this.temperatureService.getTableValues();
  }

}
