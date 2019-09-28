import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


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
  mySubscription: any;
  dataSource = new MatTableDataSource(this.products);
  displayedColumns = ['id', 'productName', 'fullPrice', 'salePrice', 'discountPercent', 'supplier', 'category', 'availability', 'actions'];

  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor(
    private productService: ProductService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
  ) {
      this.productService.findAll().subscribe(data => {
      this.products = data;
      this.dataSource.data = this.products;
    });
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
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

  public delete(id: number) {

    // filters the Product array by id for the object element
    var product = this.products.filter(function (product) {
      return product.id === id;
    })

    // stringify the deleted object for alerts
    let productString = JSON.stringify(product, null, 4);

    // alert to confirm deletion
    alert("Confirm deletion of: " + "\n" + productString);

    // deletes and repopulates the table
    this.productService.delete(id).subscribe(result => {
      this.productService.findAll().subscribe(data => {
        this.products = data;
        this.dataSource.data = this.products;
      })

      console.log("Product deleted.");

      // alert box status message for 'deleted'
      this.alertText = document.getElementById('alertText');
      this.alertText.innerHTML = "Successfully deleted " + productString + " from the database.";
      this.alertColor = document.getElementById('alertColor');
      this.alertColor.classList.add('alert-danger');

      // Need this section again for counter component to automatically update (counter is kept for development conveniences)
      this.productService.findAll().subscribe(data => {
        this.products = data;
        this.productCount = JSON.stringify(this.products.length);
        this.listSizeText = document.getElementById('listSize');
        this.listSizeText.innerHTML = this.productCount;
      })
    },

      error => {
        console.error("Product delete function error\n" + error);

        // error alert box message
        this.alertText = document.getElementById('alertText');
        this.alertText.innerHTML = "Error: Product cannot be deleted. Please check console for error message.";
        this.alertColor = document.getElementById('alertColor');
        this.alertColor.classList.add('alert-dark');
      });

  }

  headerTitle = 'Product Dashboard';
  sectionTitle = 'Total products:';


}

