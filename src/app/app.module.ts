import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GoogleChartModule } from './google-chart/google-chart.module';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './edit/edit.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EditComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleChartModule,
    HttpClientModule,
    NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
