import { Component, OnInit } from '@angular/core';
import { GoogleChartService } from '../service/google-chart.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  private gLib: any;

  constructor(private gChartService: GoogleChartService) { 
    this.gLib = this.gChartService.getGoogle();
    this.gLib.charts.load('current', {'packages':['corechart','table']});
    this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
  };

  drawChart() {
    let data = this.gLib.visualization.arrayToDataTable([
      ['Fruit', 'Count'],
      ['Apples', 10],
      ['Oranges', 40],
      ['Peaches', 23],
    ])

    let chart = new this.gLib.visualization.PieChart(document.getElementById('pieChart'));

    chart.draw(data);
  };

  ngOnInit() {
  };

}
