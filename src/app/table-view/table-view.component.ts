import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {

  @Input() dataSource: Array<any> = [];
  @Input() displayedColumns: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  simpleColumns: string[] = [
    "Id",
    "Value",
    "Key",
    "Active"
  ]
}
