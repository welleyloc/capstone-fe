import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GoogleChartModule } from './google-chart/google-chart.module';
import { HttpClientModule } from '@angular/common/http';
import { SortComponent } from './sort/sort.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { CategoriesComponent } from './categories/categories.component';
import { CommonModule, DecimalPipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatPaginatorModule, MatInputModule, MatFormFieldModule, MatSortModule, MatDialogModule } from '@angular/material';
import { ProductsComponent } from './products/products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteComponent } from './delete/delete.component';
import { AddProductComponent } from './add-product/add-product.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SortComponent,
    SuppliersComponent,
    CategoriesComponent,
    ProductsComponent,
    DeleteComponent,
    AddProductComponent,
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
    NgbModule,
    MatDialogModule
  
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent],
  entryComponents: [
    DeleteComponent, 
    AddProductComponent,

  ]
})
export class AppModule { }
