import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { GoogleChartService } from '../service/google-chart.service';
import { ProductService } from 'src/app/product.service';
import { CategoryService } from '../../category.service';
import { SupplierService } from '../../supplier.service';
import { Supplier } from 'src/app/supplier';
import { Category } from 'src/app/category';

@Component({
  selector: 'app-scatter-chart',
  templateUrl: './scatter-chart.component.html',
  styleUrls: ['./scatter-chart.component.css']
})
export class ScatterChartComponent implements OnInit {

  private gLib: any;
  product: Product;
  products: Product[];
  suppliers: Supplier[];
  categories: Category[];

  constructor(
    private gChartService: GoogleChartService,
    private productService: ProductService,
    private categoryService: CategoryService,
    private supplierService: SupplierService
  ) {
    this.gLib = this.gChartService.getGoogle();
    this.gLib.charts.load('current', {'packages':['corechart']});
    this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  drawChart() {

    var prices = new Array();
    prices.push(['Full Price', 'Sale Price'])

    for (let product of this.products) {
      prices.push([product.fullPrice, product.salePrice])
    }

    var data = this.gLib.visualization.arrayToDataTable(
      prices
    );

    var options = {
      title: 'Full vs. Sale Price comparison',
      height: 350,
      hAxis: {title: 'Full Price', minValue: 0, maxValue: 100},
      vAxis: {title: 'Sale', minValue: 0, maxValue: 100},
      legend: 'none'
    };

    var chart = new this.gLib.visualization.ScatterChart(document.getElementById('scatter-plot'));

    chart.draw(data, options);
  }

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
  }

}
