import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../product';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ProductService } from '../product.service';
import { Category } from '../category';
import { Supplier } from '../supplier';
import { DecimalPipe } from '@angular/common';
import { CategoryService } from '../category.service';
import { SupplierService } from '../supplier.service';
import { FormBuilder } from '@angular/forms';
import { DelDialogueService } from '../del-dialogue.service';

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
  formProduct: Product;

  updateProductForm = this.formBuilder.group({
    productName: [''],
    productCategory: null,
    productSupplier: null,
    fullPrice: [''],
    salePrice: [''],
    availability: null
  })

  productDataSource = new MatTableDataSource(this.products);
  displayedColumns = ['id', 'productName', 'fullPrice', 'salePrice', 'discountPercent', 'supplier', 'category', 'availability', 'actions'];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private supplierService: SupplierService,
    private delDialogueService: DelDialogueService,
    private decimalPipe: DecimalPipe,
    private formBuilder: FormBuilder
  ) {
    this.productService.findAll().subscribe(productData => {
      this.products = productData;
      this.productDataSource.data = this.products;
    });
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

  openProdAdd() {
    this.delDialogueService.openProductAdd().afterClosed().subscribe(add => {
      if (add) {
        console.log("Product added!")
      }
    });
  }

  deleteProduct(id: number) {
    var deletedProduct = this.products.filter(function (product) {
      return product.id === id;
    })

    this.delDialogueService.openConfirm(JSON.stringify(deletedProduct, null, 1)).afterClosed().subscribe(remove => {
      if (remove) {
        this.productService.delete(id).subscribe(result => {
          location.reload();
        })
      }
    })
  }

  updateProduct(formProduct: Product) {
    this.product = formProduct;
    this.updateProductForm.patchValue({
      productName: formProduct.productName,
      productCategory: formProduct.category.categoryId,
      productSupplier: formProduct.supplier.supplierId,
      fullPrice: formProduct.fullPrice,
      salePrice: formProduct.salePrice,
      availability: formProduct.availability
    })
  }

  updatedFullPrice(element) {
    this.updateProductForm.value.fullPrice = (this.decimalPipe.transform(this.updateProductForm.value.fullPrice, '1.2-2')).replace(/,/g, "");
    element.target.value = this.updateProductForm.value.fullPrice;
  }

  updatedSalePrice(element) {
    this.updateProductForm.value.salePrice = (this.decimalPipe.transform(this.updateProductForm.value.salePrice, '1.2-2')).replace(/,/g, "");
    element.target.value = this.updateProductForm.value.salePrice;
  }

  submitUpdate() {
    this.product.productName = this.updateProductForm.value.productName;
    this.product.category.categoryId = this.updateProductForm.value.productCategory;
    this.product.supplier.supplierId = this.updateProductForm.value.productSupplier;
    this.product.fullPrice = this.updateProductForm.value.fullPrice;
    this.product.salePrice = this.updateProductForm.value.salePrice;
    this.product.availability = this.updateProductForm.value.availability;

    this.productService.update(this.product, this.product.id, this.product.category.categoryId, this.product.supplier.supplierId).subscribe(result => {
      console.log("Product updated!")
      location.reload();
    })
  }
}
