import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { SupplierService } from '../supplier.service';
import { Supplier } from '../supplier';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { CommonModule, DecimalPipe} from '@angular/common';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {

  product: Product;
  categories: Category[];
  suppliers: Supplier[];
  alertText: HTMLElement;
  alertColor: any;

  constructor(private productService: ProductService,
    private categoryService: CategoryService,
    private supplierService: SupplierService,
    private decimalPipe: DecimalPipe,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.product = new Product()
  }


  currencyFullPrice(element){
      this.product.fullPrice = (this.decimalPipe.transform(this.product.fullPrice, '1.2-2')).replace(/,/g, "");
      element.target.value =  this.product.fullPrice;
    
  }

  currencySalePrice(element){
    this.product.salePrice = (this.decimalPipe.transform(this.product.salePrice, '1.2-2')).replace(/,/g, "");
    element.target.value =  this.product.salePrice;
  
}

  onSubmit() {
    this.productService.create(this.product, this.product.category, this.product.supplier).subscribe(result => {

      // alert box status message for 'deleted'
      this.alertText = document.getElementById('alertText');
      this.alertText.innerHTML = "Successfully added " + JSON.stringify(this.product) + " to the database.";

    });
    console.log("Product added: " + JSON.stringify(this.product));
  }

  ngOnInit() {
    this.categoryService.findAll().subscribe(data => {
      this.categories = data;
      // this.categories.push({ categoryId: 999, categoryName: 'Other' });
    })

    this.supplierService.findAll().subscribe(data => {
      this.suppliers = data;
    })
  }

}
