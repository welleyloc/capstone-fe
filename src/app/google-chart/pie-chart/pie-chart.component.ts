import { Component, OnInit } from '@angular/core';
import { GoogleChartService } from '../service/google-chart.service';
import { Product } from 'src/app/product';
import { Category } from 'src/app/category';
import { ProductService } from 'src/app/product.service';
import { CategoryService } from '../../category.service';
import { SupplierService } from '../../supplier.service';
import { Supplier } from 'src/app/supplier';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  
  private gLib: any;
  products: Product[];
  categories: Category[];
  suppliers: Supplier[];

  constructor(
    private gChartService: GoogleChartService,
    private productService: ProductService,
    private categoryService: CategoryService,
    private supplierService: SupplierService,
    ) { 
    this.gLib = this.gChartService.getGoogle();
    this.gLib.charts.load('current', {'packages':['corechart','table']});
    this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
  };

  drawChart() {
    var cats = new Array();
    cats.push(['Category', 'Count'])
    for(let category of this.categories) {
      cats.push([category.categoryName,category.productList.length])
    }
    console.log(cats)
    let data = this.gLib.visualization.arrayToDataTable(
      cats
    )

    var options = {
      'title': 'Product distribution by Category',
      'width': 400,
      'height': 400
    }

    let chart = new this.gLib.visualization.PieChart(document.getElementById('pieChart'));

    chart.draw(data, options);
  };

  ngOnInit() {
    this.productService.findAll().subscribe(productData => {
      this.products = productData;
    })
    this.supplierService.findAll().subscribe(supplierData => {
      this.suppliers = supplierData;
    })
    this.categoryService.findAll().subscribe(categoryData => {
      this.categories = categoryData;
    })
  };

}
