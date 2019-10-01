import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GoogleChartModule } from './google-chart/google-chart.module';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './edit/edit.component';
import { SortComponent } from './sort/sort.component';
import { AddComponent } from './add/add.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { CategoriesComponent } from './categories/categories.component';
import { CommonModule, CurrencyPipe, DecimalPipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatPaginatorModule, MatInputModule, MatFormFieldModule, MatSortModule } from '@angular/material';
import { ProductsComponent } from './products/products.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EditComponent,
    SortComponent,
    AddComponent,
    SuppliersComponent,
    CategoriesComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleChartModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatPaginatorModule, 
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    NgbAlertModule
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
