import { Component, OnInit } from '@angular/core';
import { RecordedDataEntry } from '../models/recordedDataEntry';
import { TemperatureService } from '../services/temperature/temperature.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {

  dataSource: RecordedDataEntry[] = [];
  displayedColumns: string[] = ['id', 'value', 'created'];

  constructor(private temperatureService: TemperatureService) { }

  ngOnInit(): void {
    this.dataSource = this.temperatureService.getTableValues();
  }

}
