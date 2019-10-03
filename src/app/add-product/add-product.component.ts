import { Component, OnInit, Inject } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { SupplierService } from '../supplier.service';
import { Supplier } from '../supplier';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { DecimalPipe } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component ({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  products: Product[];
  product: Product;
  categories: Category[];
  category: Category;
  suppliers: Supplier[];
  supplier: Supplier;
  categoryId: number;
  supplierId: number;


  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private supplierService: SupplierService,
    private decimalPipe: DecimalPipe,
    @Inject(MAT_DIALOG_DATA) public data,
    public dialog: MatDialogRef<AddProductComponent>
  ) {
    this.product = new Product();
  }

  ngOnInit() {
    this.categoryService.findAll().subscribe(categoryData => {
      this.categories = categoryData;
    })

    this.supplierService.findAll().subscribe(supplierData => {
      this.suppliers = supplierData;
    })

    this.productService.findAll().subscribe(productData => {
      this.products = productData;
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

  createProduct() {

    this.categoryId = +this.product.category;
    this.supplierId = +this.product.supplier;

    this.productService.create(this.product, this.categoryId, this.supplierId).subscribe(result => {
      console.log("Product added: " + JSON.stringify(this.product));
      location.reload();
    })

  }

}
