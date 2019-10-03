import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DeleteComponent } from './delete/delete.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';

@Injectable({
  providedIn: 'root'
})
export class DelDialogueService {

  constructor(
    private delDialog: MatDialog,
    private addProdDialog: MatDialog,
    private addCatDialog: MatDialog,
    private addSupDialog: MatDialog
  ) { }

  openConfirm(msg) {
    return this.delDialog.open(DeleteComponent, {
      width: '500px',
      panelClass: 'del-dialog-container', // css class
      data: {
        message: msg,
      },
      disableClose: true
    });
  }

  openProductAdd() {
    return this.addProdDialog.open(AddProductComponent, {
      width: '500px',
      disableClose: true
    })
  }

  openCatAdd() {
    return this.addCatDialog.open(AddCategoryComponent, {
      width: '500px',
      disableClose: true
    })
  }

  openSupAdd() {
    return this.addSupDialog.open(AddSupplierComponent, {
      width: '500px',
      disableClose: true
    })
  }
}
