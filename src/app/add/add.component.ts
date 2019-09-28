import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { SupplierService } from '../supplier.service';
import { Supplier } from '../supplier';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { CommonModule, CurrencyPipe} from '@angular/common';


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
    private currencyPipe: CurrencyPipe,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.product = new Product()
  }


  currencyFullPrice(element){
      this.product.fullPrice = (this.currencyPipe.transform(this.product.fullPrice,'$')).substring(1);
      element.target.value =  this.product.fullPrice;
    
  }

  currencySalePrice(element){
    this.product.salePrice = (this.currencyPipe.transform(this.product.salePrice,'$')).substring(1);
    element.target.value =  this.product.salePrice;
  
}

  onSubmit() {
    this.productService.create(this.product).subscribe(result => {

      // alert box status message for 'deleted'
      this.alertText = document.getElementById('alertText');
      this.alertText.innerHTML = "Successfully added " + JSON.stringify(this.product) + " to the database.";
      this.alertColor = document.getElementById('alertColor');
      this.alertColor.classList.add('alert-success');

    });
    console.log("Product added: " + JSON.stringify(this.product));
  }

  // goToDashboard() {
  //   this.router.navigate(['/dashboard']);
  // }

  ngOnInit() {
    this.categoryService.findAll().subscribe(data => {
      this.categories = data;
      this.categories.push({ categoryId: 999, categoryName: 'Other' });
    })

    this.supplierService.findAll().subscribe(data => {
      this.suppliers = data;
      this.suppliers.push({ supplierId: 999, supplierName: 'Other' });
    })
  }

  // calculate() {

  //   console.log('CALCULATED!');
  //   var fullAmount = +(document.getElementById('fullPrice') as HTMLInputElement).value;

  //   var saleAmount = +(document.getElementById('salePrice') as HTMLInputElement).value;
  
  //   var discountCalculated = (fullAmount - saleAmount) / fullAmount * 100;
  //   (document.getElementById('discountPercent') as HTMLInputElement).value = discountCalculated;

  // }



  warning() {
    alert("Close without submitting?")
  }

}
