import { Component } from '@angular/core';
import { TileValue } from './temperature-tile/TileValue';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CMonitor';
  
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
}
