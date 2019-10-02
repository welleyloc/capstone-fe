import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../product';
import { Category } from '../category';
import { Supplier } from '../supplier';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { SupplierService } from '../supplier.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  products: Product[];
  product: Product;
  categories: Category[];
  category: Category;
  suppliers: Supplier[];
  supplier: Supplier;
  productToBeUpdated: Product;
  productUpdated: Product;

  mySubscription: any;

  updateProductForm = this.formBuilder.group({
    productName: [''],
    productCategory: null,
    productSupplier: null,
    fullPrice: [''],
    salePrice: [''],
    availability: null
  })

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private supplierService: SupplierService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private decimalPipe: DecimalPipe,
    private formBuilder: FormBuilder
  ) {

    this.product = new Product();
  }

  ngOnInit() {
    this.productService.findAll().subscribe(productData => {
      this.products = productData;
    });

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

  // updateProduct(formProduct: Product) {
  //   this.updateProductForm.patchValue({
  //     productName: formProduct.productName,
  //     productCategory: formProduct.category.categoryId,
  //     productSupplier: formProduct.supplier.supplierId,
  //     fullPrice: formProduct.fullPrice,
  //     salePrice: formProduct.salePrice,
  //     availability: formProduct.availability
  //   })
  // }

  submitUpdate(product: Product) {
    
    console.log(this.updateProductForm.value);

    //    this.productService.update(this.productToBeUpdated, this.product.category, this.product.supplier).subscribe(result => {
    //     console.log("updated!")
    // })
  

  }

}
