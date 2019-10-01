import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../product';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  productCount: string;
  listSizeText: HTMLElement;
  alertText: HTMLElement;
  mySubscription: any;
  productDataSource = new MatTableDataSource(this.products);
  displayedColumns = ['id', 'productName', 'fullPrice', 'salePrice', 'discountPercent', 'supplier', 'category', 'availability', 'actions'];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;



  constructor(
    private productService: ProductService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
  ) {
      this.productService.findAll().subscribe(data => {
      this.products = data;
      this.productDataSource.data = this.products;
    });
  }

  ngOnInit() {
    this.productDataSource.sort = this.sort;
    this.productDataSource.paginator = this.paginator;
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

  public deleteProduct(id: number) {

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
