import { Component, OnInit, ViewChild } from '@angular/core';
import { SupplierService } from '../supplier.service';
import { Supplier } from '../supplier';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  suppliers: Supplier[];
  supplierDataSource = new MatTableDataSource(this.suppliers);
  displayedColumns = ['supplierId', 'supplierName', 'actions'];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private supplierService: SupplierService) {
    this.supplierService.findAll().subscribe(data => {
      this.suppliers = data;
      this.supplierDataSource.data = this.suppliers;
    })
  }

  ngOnInit() {
    this.supplierDataSource.sort = this.sort;
    this.supplierDataSource.paginator = this.paginator;
  }

  public deleteSupplier(supplierId: number) {
    var supplier = this.suppliers.filter(function (supplier) {
      return supplier.supplierId === supplierId;
    })

    let supplierString = JSON.stringify(supplier, null, 4);

    confirm("WARNING: Deleting this supplier will remove all of its products!\n" + supplierString);

    this.supplierService.delete(supplierId).subscribe(result => {
      this.supplierService.findAll().subscribe(data => {
        this.suppliers = data;
        this.supplierDataSource.data = this.suppliers;
      })
    })

    console.log("Supplier and associated products deleted.")

    error => {
      console.error("Supplier delete function error\n" + error);
    }
  }

  headerTitle = "Product Suppliers List"

}

