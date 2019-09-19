import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { CategoriesComponent } from './categories/categories.component';
import { HttpClient } from 'selenium-webdriver/http';
import { GoogleChartModule } from './google-chart/google-chart.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SuppliersComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HttpClient,
    GoogleChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
