import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Product } from '../product';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from '../category';
import { Supplier } from '../supplier';
import { DecimalPipe } from '@angular/common';
import { CategoryService } from '../category.service';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  product: Product;
  categories: Category[];
  category: Category;
  suppliers: Supplier[];
  supplier: Supplier;

  alertText: HTMLElement;
  mySubscription: any;
  productDataSource = new MatTableDataSource(this.products);
  displayedColumns = ['id', 'productName', 'fullPrice', 'salePrice', 'discountPercent', 'supplier', 'category', 'availability', 'actions'];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private supplierService: SupplierService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private decimalPipe: DecimalPipe,
  ) {
    this.productService.findAll().subscribe(data => {
      this.products = data;
      this.productDataSource.data = this.products;
    });

    this.product = new Product();
  }

  ngOnInit() {
    this.productDataSource.sort = this.sort;
    this.productDataSource.paginator = this.paginator;

    this.categoryService.findAll().subscribe(categoryData => {
      this.categories = categoryData;
    })

    this.supplierService.findAll().subscribe(supplierData => {
      this.suppliers = supplierData;
    })
  }

  currencyFullPrice(element) {
    this.product.fullPrice = (this.decimalPipe.transform(this.product.fullPrice, '1.2-2')).replace(/,/g, "");
    element.target.value = this.product.fullPrice;
  }

  currencySalePrice(element) {
    this.product.salePrice = (this.decimalPipe.transform(this.product.salePrice, '1.2-2')).replace(/,/g, "");
    element.target.value = this.product.salePrice;

  }

  deleteProduct(id: number) {

    // filters the Product array by id for the object element
    var product = this.products.filter(function (product) {
      return product.id === id;
    })

    // stringify the deleted object for alerts
    let productString = JSON.stringify(product, null, 4);

    // alert to confirm deletion
    confirm("Confirm deletion of: " + "\n" + productString);

    // deletes and repopulates the table
    this.productService.delete(id).subscribe(result => {
      this.productService.findAll().subscribe(data => {
        this.products = data;
        this.productDataSource.data = this.products;
      })

      console.log("Product deleted.");

      // alert box status message for 'deleted'
      this.alertText = document.getElementById('alertText');
      this.alertText.innerHTML = "Deleted " + productString;
      this.alertText.style.color = 'red';
    },

      error => {
        console.error("Product delete function error\n" + error);

        // error alert box message
        this.alertText = document.getElementById('alertText');
        this.alertText.innerHTML = "Error: Product cannot be deleted.";
        this.alertText.style.color = 'red';
      });
  }

}
