import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { GoogleChartService } from '../service/google-chart.service';
import { ProductService } from 'src/app/product.service';
import { Supplier } from '../../supplier';
import { SupplierService } from '../../supplier.service';
import { Category } from 'src/app/category';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-pie-chart2',
  templateUrl: './pie-chart2.component.html',
  styleUrls: ['./pie-chart2.component.css']
})
export class PieChart2Component implements OnInit {


  private gLib: any;
  products: Product[];
  suppliers: Supplier[];
  categories: Category[];

  constructor(
    private gChartService: GoogleChartService,
    private productService: ProductService,
    private supplierService: SupplierService,
    private categoryService: CategoryService
  ) {
    this.gLib = this.gChartService.getGoogle();
    this.gLib.charts.load('current', { 'packages': ['corechart', 'table'] });
    this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
  };

  drawChart() {
    var sups = new Array();
    sups.push(['Supplier', 'Count'])
    for (let supplier of this.suppliers) {
      sups.push([supplier.supplierName, supplier.productList.length])
    }
    console.log(sups)
    let data = this.gLib.visualization.arrayToDataTable(
      sups
    )

    var options = {
      'title': 'Product distribution by Supplier',
      'width': 400,
      'height': 400
    };
    
    let chart = new this.gLib.visualization.PieChart(document.getElementById('pieChart2'));

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
