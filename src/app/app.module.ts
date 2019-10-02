import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GoogleChartModule } from './google-chart/google-chart.module';
import { HttpClientModule } from '@angular/common/http';
import { SortComponent } from './sort/sort.component';
import { AddComponent } from './add/add.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { CategoriesComponent } from './categories/categories.component';
import { CommonModule, DecimalPipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatPaginatorModule, MatInputModule, MatFormFieldModule, MatSortModule } from '@angular/material';
import { ProductsComponent } from './products/products.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SortComponent,
    AddComponent,
    SuppliersComponent,
    CategoriesComponent,
    ProductsComponent,
    UpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleChartModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatPaginatorModule, 
    MatTableModule,
    MatSortModule,
    NgbAlertModule,
  
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
