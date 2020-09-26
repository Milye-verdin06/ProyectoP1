import { Component, OnInit } from '@angular/core';
declare var graficas: any;

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
})
export class ChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    graficas();
  }
}
