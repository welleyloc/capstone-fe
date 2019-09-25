import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../supplier.service';
import { Supplier } from '../supplier';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  suppliers: Supplier[];
  supplierCount: string;
  supplierSize: HTMLElement;

  constructor(private supplierService: SupplierService) { }

  ngOnInit() {
    this.supplierService.findAll().subscribe(data => {
      this.suppliers = data;

      this.supplierCount = JSON.stringify(this.suppliers.length);

      // category counter for subheading
      this.supplierSize = document.getElementById('supplierSize');
      this.supplierSize.innerHTML = this.supplierCount;
    })
  }

headerTitle = "Product Suppliers List"

}

