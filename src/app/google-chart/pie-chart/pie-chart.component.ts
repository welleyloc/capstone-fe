import { Component, OnInit } from '@angular/core';
import { GoogleChartService } from '../service/google-chart.service';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  private gLib: any;
  products: Product[];

  constructor(private gChartService: GoogleChartService) { 
    this.gLib = this.gChartService.getGoogle();
    this.gLib.charts.load('current', {'packages':['corechart','table']});
    this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
  };

  drawChart() {
    let data = this.gLib.visualization.arrayToDataTable([
      ['Type', 'Count'],
      ['Apples', 10],
      ['Oranges', 40],
      ['Peaches', 23],
      ['Pineapples', 10],
      ['Mandarins', 40],
      ['Grapes', 23],
    ])

    let chart = new this.gLib.visualization.PieChart(document.getElementById('pieChart'));

    chart.draw(data);
  };

  ngOnInit() {
  };

}
