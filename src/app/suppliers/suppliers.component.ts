import { Component, OnInit, ViewChild } from '@angular/core';
import { SupplierService } from '../supplier.service';
import { Supplier } from '../supplier';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { DelDialogueService } from '../del-dialogue.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  suppliers: Supplier[];
  supplier: Supplier;

  updateSupplierForm = this.formBuilder.group({
    supplierName: [''],
  })

  supplierDataSource = new MatTableDataSource(this.suppliers);
  displayedColumns = ['supplierId', 'supplierName', 'actions'];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private supplierService: SupplierService,
    private delDialogueService: DelDialogueService,
    private formBuilder: FormBuilder
  ) {
    this.supplierService.findAll().subscribe(data => {
      this.suppliers = data;
      this.supplierDataSource.data = this.suppliers;
    })
  }

  ngOnInit() {
    this.supplierDataSource.sort = this.sort;
    this.supplierDataSource.paginator = this.paginator;
  }

  openSupAdd() {
    this.delDialogueService.openSupAdd().afterClosed().subscribe(add => {
      if (add) {
        console.log("Supplier added!")
      }
    })
  }

  updateSupplier(formSupplier: Supplier) {
    this.supplier = formSupplier;
    this.updateSupplierForm.patchValue({
      supplierName: formSupplier.supplierName
    })
  }

  submitUpdate() {

    this.supplier.supplierName = this.updateSupplierForm.value.supplierName;

    console.log(this.supplier);

    this.supplierService.update(this.supplier, this.supplier.supplierId).subscribe(result => {
      console.log("Supplier updated!")
      location.reload();
    })
  }

  deleteSupplier(supplierId: number) {

    this.delDialogueService.openConfirm('WARNING: Removing this supplier will remove all associated products.').afterClosed().subscribe(remove => {
      if (remove) {
        this.supplierService.delete(supplierId).subscribe(result => {
          location.reload();
        })
      }
    })
  }

  headerTitle = "Product Suppliers List"

}

