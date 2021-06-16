import { Component, OnInit } from '@angular/core';
import { HumidityService } from '../services/humidity/humidity.service';
import { TemperatureService } from '../services/temperature/temperature.service';
import { TileValue } from '../temperature-tile/TileValue';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private temperatureService: TemperatureService, private humidityService: HumidityService) { }

  ngOnInit(): void {
  }

  getLatestHumidity(): TileValue {
    return {
      icon: "water_drop",
      title: "Humidity",
      value: this.humidityService.getLatestValue(),
      color: "#46BFBD"
    };
  }

  getLatestTemperature(): TileValue {
    return {
      icon: "thermostat",
      title: "Temperature",
      value: this.temperatureService.getLatestValue(),
      color: "#F7464A"
    };
  }
}
