import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: []
})
export class CounterComponent implements OnInit {

  products: Product[];
  productCount: string;
  listSizeText: HTMLElement;

  constructor(private productService: ProductService,) { }

  ngOnInit() {

    this.productService.findAll().subscribe(data => {
      this.products = data;
      console.log(data.length)
      this.productCount = JSON.stringify(this.products.length);
      console.log(this.productCount);

      // dynamic product counter for subheading
      this.listSizeText = document.getElementById('listSize');
      this.listSizeText.innerHTML = this.productCount;
    })
  }

}
