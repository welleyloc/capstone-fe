import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceModule } from './service/service.module';
import { PieChartComponent } from './pie-chart/pie-chart.component';



@NgModule({
  declarations: [PieChartComponent],
  imports: [
    CommonModule,
    ServiceModule
  ],
  exports: [
    PieChartComponent
  ]
})
export class GoogleChartModule { }
