import { Component, OnInit, Inject } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../category';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  category: Category;

  constructor(
    private categoryService: CategoryService,
    @Inject (MAT_DIALOG_DATA) public data,
    public dialog: MatDialogRef<AddCategoryComponent>
  ) {
    this.category = new Category();
   }

  ngOnInit() {
  }

  createCategory() {

    this.categoryService.create(this.category).subscribe(result => {
      console.log("Category added: " + JSON.stringify(this.category));
      location.reload();
    })

  }
}
