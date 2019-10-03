import { Injectable } from '@angular/core';
import { MatDialog, MatTreeNodePadding } from '@angular/material';
import { DeleteComponent } from './delete/delete.component';
import { AddProductComponent } from './add-product/add-product.component';

@Injectable({
  providedIn: 'root'
})
export class DelDialogueService {

  constructor(
    private delDialog: MatDialog,
    private addProdDialog: MatDialog
  ) { }

  openConfirm(msg) {
    return this.delDialog.open(DeleteComponent, {
      width: '500px',
      panelClass: 'del-dialog-container', // css class
      data: {
        message: msg
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
}
