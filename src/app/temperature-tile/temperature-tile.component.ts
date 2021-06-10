import { Component, Input, OnInit } from '@angular/core';
import { TileValue } from './TileValue';

@Component({
  selector: 'app-temperature-tile',
  templateUrl: './temperature-tile.component.html',
  styleUrls: ['./temperature-tile.component.scss']
})
export class TemperatureTileComponent implements OnInit {

  @Input() value?: TileValue;

  constructor() { }

  ngOnInit(): void {
  }

}
