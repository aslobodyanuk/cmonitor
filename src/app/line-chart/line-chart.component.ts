import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  @Input() heightREM: string = "100";

  constructor() { }

  ngOnInit(): void {
  }

  public chartType: string = 'line';

  public chartDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Temparature' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Humidity' }
  ];

  public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, 0)',
      borderColor: '#F7464A',
      // hoverBackgroundColor: '#FF5A5E',
      borderWidth: 3,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, 0)',
      borderColor: '#46BFBD',
      // hoverBackgroundColor: '#5AD3D1',
      borderWidth: 3,
    }
  ];

  public chartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}