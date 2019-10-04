import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceModule } from './service/service.module';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { PieChart2Component } from './pie-chart2/pie-chart2.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';



@NgModule({
  declarations: [PieChartComponent, PieChart2Component, ScatterChartComponent],
  imports: [
    CommonModule,
    ServiceModule
  ],
  exports: [
    PieChartComponent,
    PieChart2Component,
    ScatterChartComponent
  ]
})
export class GoogleChartModule { }
