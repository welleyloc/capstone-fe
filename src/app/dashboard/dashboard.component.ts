import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products: Product[];

  productCount: string;
  listSizeText: HTMLElement;
  alertText: HTMLElement;
  alertColor: any;

  constructor(
    private productService: ProductService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
  }


  // update() {
  //   if (this.fieldStatus == false) {
  //     this.fieldStatus = true;
  //   } else if (this.fieldStatus == true) 
  //   {this.fieldStatus = false} 
  //   console.log('click!')
  // }

  public get(id: number) {
    this.productService.get(id).subscribe(result =>
      alert(this.productService.get(id)))
  }


}

