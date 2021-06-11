import { Component, OnInit } from '@angular/core';
import { TileValue } from '../temperature-tile/TileValue';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  temperature = {
    icon: "thermostat",
    title: "Temperature",
    value: "36°C",
    color: "#F7464A"
  } as TileValue;

  humidity = {
    icon: "water_drop",
    title: "Humidity",
    value: "45%",
    color: "#46BFBD"
  } as TileValue;
  
  constructor() { }

  ngOnInit(): void {
  }

}
