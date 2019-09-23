import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products: Product[];
  
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.findAll().subscribe(data => {
      this.products = data;
    })
  }

  sectionTitle = 'Total products: (insert dynamic number)'; 

}
