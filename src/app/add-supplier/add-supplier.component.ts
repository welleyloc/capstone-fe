import { Component, OnInit, Inject } from '@angular/core';
import { Supplier } from '../supplier';
import { SupplierService } from '../supplier.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Category } from '../category';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent implements OnInit {

  supplier: Supplier;

  constructor(
    private supplierService: SupplierService,
    @Inject (MAT_DIALOG_DATA) public data,
    public dialog: MatDialogRef<AddSupplierComponent>
  ) {
    this.supplier = new Supplier();
   }

  ngOnInit() {
  }

  createSupplier() {

    this.supplierService.create(this.supplier).subscribe(result => {
      console.log("Supplier added: " + JSON.stringify(this.supplier));
      location.reload();
    })

  }

}
