import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { RecordedDataEntry } from '../models/recordedDataEntry';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {

  @Input() dataSource: RecordedDataEntry[] = [];
  displayedColumns: string[] = ['id', 'value', 'created'];

  constructor() { }

  ngOnInit(): void {
  }

}
