import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialog: MatDialogRef<DeleteComponent>
    ) { }

  ngOnInit() {
  }

  header = "Delete Confirmation"

  // Close button
  // cancel() {
  //   this.dialog.close();
  // }

}
